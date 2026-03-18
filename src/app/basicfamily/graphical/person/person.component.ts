import {Component, Input} from '@angular/core';
import {Person} from "../../core/Person";

@Component({
  selector: '[person]',
  imports: [],
  templateUrl: './person.component.svg',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  @Input() person!: Person;

}
