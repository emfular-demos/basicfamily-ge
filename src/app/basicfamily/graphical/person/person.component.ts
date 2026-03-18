import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../core/Person";
import {DraggableComponent, Dragger, SVGAccessService} from "ngx-svg-graphics";

@Component({
  selector: '[person]',
  imports: [],
  templateUrl: './person.component.svg',
  styleUrl: './person.component.css'
})
export class PersonComponent extends DraggableComponent<Person> implements OnInit {
  @Input() person!: Person;

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
    //todo once we have the details service
    console.log("Clicked: "+this.person.name);
  }

}
