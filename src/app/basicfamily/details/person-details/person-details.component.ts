import {Component, Input} from '@angular/core';
import {Person} from "../../core/Person";

@Component({
  selector: 'app-person-details',
  imports: [],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent {
  @Input() person!: Person

}
