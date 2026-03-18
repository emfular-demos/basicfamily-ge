import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FamilyComponent} from "../../graphical/family/family.component";
import {BasicfamilyService} from "../../edit/Basicfamily.service";
import {Person} from "../../core/Person";

@Component({
  selector: 'app-person-choice',
  imports: [
    FamilyComponent
  ],
  templateUrl: './person-choice.component.html',
  styleUrl: './person-choice.component.css'
})
export class PersonChoiceComponent {

  svgwidth = 1500;
  svgheigth = 1000;

  @Input() modelService!: BasicfamilyService
  @Output() choosePerson: EventEmitter<Person> = new EventEmitter();

}
