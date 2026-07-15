import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import {BasicfamilyService} from "../edit/Basicfamily.service";
import {Person} from "../core/Person";
import { ComponentPortal } from '@angular/cdk/portal';
import {Observable, Subject} from "rxjs";
import {PersonChoiceComponent} from "./person-choice/person-choice.component";
import {PersonDetailsComponent} from "./person-details/person-details.component";

@Injectable({
  providedIn: 'root'
})
export class PersonDetailsService {

  private overlayRef?: OverlayRef;

  constructor(
      private overlay: Overlay,
      private modelService: BasicfamilyService
  ) { }

  openDetails(elem: Person) {
    this.overlayRef = this.overlay.create(
        { hasBackdrop: true,
          backdropClass: 'cdk-overlay-dark-backdrop',
          panelClass: 'basic-details-panel',
          positionStrategy: this.overlay.position()
              .global() .centerHorizontally() .centerVertically()
        });
    const portal = new ComponentPortal(PersonDetailsComponent);
    const ref = this.overlayRef.attach(portal);
    ref.instance.person = elem;
    //ref.instance.modelService = this.modelService;
    //ref.instance.detailsService = this
    this.overlayRef.backdropClick().subscribe(
        () => this.closeDetails()
    );
  }

  closeDetails() {
    this.overlayRef?.dispose();
    this.overlayRef = undefined;
  }

  openModelChoice(): Observable<Person> {

    const subject = new Subject<Person>();

    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-dark-backdrop',
      panelClass: 'basic-details-panel',
      positionStrategy: this.overlay.position()
          .global().centerHorizontally().centerVertically()
    });

    const portal = new ComponentPortal(PersonChoiceComponent);
    const ref = overlayRef.attach(portal);

    ref.instance.modelService = this.modelService;
    ref.instance.choosePerson.subscribe(next => {
      subject.next(next);
      subject.complete();
      overlayRef.dispose();
    });

    overlayRef.backdropClick().subscribe(() => {
      subject.complete();
      overlayRef.dispose();
    });

    return subject.asObservable();
  }

}
