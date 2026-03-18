import {Component, Input} from '@angular/core';
import {Person} from "../../core/Person";
import {FormsModule} from "@angular/forms";
import {ContainerDetailsComponent} from "ngx-emfular-integration";
import {BasicfamilyService} from "../../edit/Basicfamily.service";
import {PersonDetailsService} from "../person-details.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-person-details',
  imports: [
    FormsModule,
    ContainerDetailsComponent,
    NgForOf
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

  addChild() {

  }
  removeChild(child: Person) {

  }
  openDetails(person: Person) {
    this.detailsService.openDetails(person);
  }

}
