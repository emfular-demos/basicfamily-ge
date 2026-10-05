import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../../core/Person";
import {
    DraggableDirective,
    ArrowBetweenElemsComponent
} from "ngx-emfular-diagram";
import { NgIf } from '@angular/common';

@Component({
  selector: '[person]',
    imports: [
        NgIf,
        DraggableDirective,
        ArrowBetweenElemsComponent
    ],
  templateUrl: './person.component.svg',
  styles: []
})
export class PersonComponent {
  @Input() person!: Person;
  @Output() chosePerson = new EventEmitter<Person>();


  clickPerson() {
      this.chosePerson.emit(this.person);
  }


}
