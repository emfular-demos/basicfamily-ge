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
  @Output() doubleClickPerson = new EventEmitter<Person>();

  constructor(
      svgAccessService: SVGAccessService,
  ) {
    super(svgAccessService);
  }

  ngOnInit() {
    this.elem = this.person;
    this.elemDragger = new Dragger(this.elem);
  }

    private clickTimer: any = null;
    private readonly delay = 250; // double-click window

    clickPerson() {
        if (this.clickTimer != null) {
            // Second click within the window → double click
            clearTimeout(this.clickTimer);
            this.clickTimer = null;
            this.handleDouble();
        } else {
            // First click → start timer
            this.clickTimer = setTimeout(() => {
                this.clickTimer = null;
                this.handleSingle();
            }, this.delay);
        }
    }

  private handleSingle() {
      this.chosePerson.emit(this.person);
  }

  private handleDouble() {
      this.doubleClickPerson.emit(this.person);
  }

}
