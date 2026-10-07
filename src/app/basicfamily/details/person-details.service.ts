import { Injectable } from '@angular/core';
import { Overlay} from '@angular/cdk/overlay';
import {ModalInstance, ModalService} from "ngx-emfular-tool"
import {BasicfamilyService} from "../edit/Basicfamily.service";
import {Person} from "../core/Person";
import {Observable} from "rxjs";
import {PersonChoiceComponent} from "./person-choice/person-choice.component";
import {PersonDetailsComponent} from "./person-details/person-details.component";

@Injectable({
  providedIn: 'root'
})
export class PersonDetailsService {

  constructor(
      private overlay: Overlay,
      private modalService: ModalService,
      private modelService: BasicfamilyService
  ) { }

  openDetails(elem: Person) {
    const modalInstance: ModalInstance<PersonDetailsComponent, void> =
        this.modalService.createModal(
            PersonDetailsComponent,
            {
              hasBackdrop: true,
              backdropClass: 'cdk-overlay-dark-backdrop',
              panelClass: 'basic-details-panel',
              positionStrategy: this.overlay.position()
                  .global().centerHorizontally().centerVertically()
            }
        )
    modalInstance.componentRef.instance.person = elem
    modalInstance.componentRef.instance.closeMe.subscribe(() => modalInstance.ref.close())
  }

  openPersonChoice(): Observable<Person> {
    const modalInstance: ModalInstance<PersonChoiceComponent, Person> = this.modalService.createModal(
        PersonChoiceComponent,
        {
          hasBackdrop: true,
          backdropClass: 'cdk-overlay-dark-backdrop',
          panelClass: 'tree-choice-panel',
          positionStrategy: this.overlay.position()
              .global().centerHorizontally().centerVertically()
        }
    )
    modalInstance.componentRef.instance.modelService = this.modelService
    modalInstance.componentRef.instance.choosePerson.subscribe(chosen => {
      modalInstance.ref.close(chosen);
    });
    return modalInstance.ref.closed
  }

}
