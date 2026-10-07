import {Component, EventEmitter, Input, Output,} from '@angular/core';
import {Person} from "../../core/Person";
import {FormsModule} from "@angular/forms";
import {BasicfamilyService} from "../../edit/Basicfamily.service";
import {PersonDetailsService} from "../person-details.service";
import { NgIf} from "@angular/common";

@Component({
  selector: 'app-person-details',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent {
  @Input() person!: Person
  @Output() closeMe: EventEmitter<void> = new EventEmitter()

  constructor(
      public modelService: BasicfamilyService,
      public detailsService: PersonDetailsService,
      ) {}

  chooseMother() {
    this.detailsService
        .openPersonChoice()
        .subscribe(chosen => {
          if (!chosen) return; // user cancelled
          else {
            this.modelService.connectChildAndMother(this.person, chosen);
          }
        });
  }

  removeMother() {
    this.modelService.removeMother(this.person)
  }

  chooseFather() {
    this.detailsService
        .openPersonChoice()
        .subscribe(chosen => {
          if (!chosen) return; // user cancelled
          else {
            this.modelService.connectChildAndFather(this.person, chosen);
          }
        });
  }

  removeFather() {
    this.modelService.removeFather(this.person)
  }

  deleteMe() {
      this.modelService.deletePerson(this.person)
      this.closeMe.emit()
  }

}
