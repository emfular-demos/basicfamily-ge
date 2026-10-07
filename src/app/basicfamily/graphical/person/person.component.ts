import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../../core/Person";
import {
    ArrowBetweenElemsComponent,
    DraggableDirective,
    SingleVsDblClick
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
  @Output() doubleClickPerson = new EventEmitter<Person>();

  singleVsDouble: SingleVsDblClick

   constructor() {
      this.singleVsDouble = new SingleVsDblClick();
      this.singleVsDouble.singleClick$.subscribe(() => this.chosePerson.emit(this.person))
      this.singleVsDouble.doubleClick$.subscribe(() => this.doubleClickPerson.emit(this.person))
   }

  //decide whether single or double click action should be triggered
  clickPerson() {
      this.singleVsDouble.click();
  }

}
