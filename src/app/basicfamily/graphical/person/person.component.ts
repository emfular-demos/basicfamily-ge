import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../../core/Person";
import {
    ArrowBetweenElemsComponent,
    DraggableComponent,
    Dragger,
    SVGAccessService
} from "ngx-svg-graphics";
import {NgIf} from "@angular/common";

@Component({
  selector: '[person]',
    imports: [
        NgIf,
        ArrowBetweenElemsComponent
    ],
  templateUrl: './person.component.svg',
  styleUrl: './person.component.css'
})
export class PersonComponent extends DraggableComponent<Person> implements OnInit {
  @Input() person!: Person;
  @Output() chosePerson = new EventEmitter<Person>();

  constructor(
      svgAccessService: SVGAccessService,
  ) {
    super(svgAccessService);
  }

  ngOnInit() {
    this.elem = this.person;
    this.elemDragger = new Dragger(this.elem);
  }

  clickPerson() {
    //todo change once we have the right details service
    console.log("Clicked: "+this.person.name);
    this.chosePerson.emit(this.person);
  }

}
