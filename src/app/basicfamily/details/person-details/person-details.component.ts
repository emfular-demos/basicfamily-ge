import {Component, Input,} from '@angular/core';
import {Person} from "../../core/Person";
import {FormsModule} from "@angular/forms";
import {BasicfamilyService} from "../../edit/Basicfamily.service";
import {PersonDetailsService} from "../person-details.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-person-details',
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent {
  @Input() person!: Person

  constructor(
      public modelService: BasicfamilyService,
      public detailsService: PersonDetailsService,
      ) {}

  chooseMother() {
    this.detailsService
        .openModelChoice()
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
        .openModelChoice()
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

  addChild() {

  }
  removeChild(child: Person) {

  }
  openDetails(person: Person) {
    this.detailsService.openDetails(person);
  }

}
