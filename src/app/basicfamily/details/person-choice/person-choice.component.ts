import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FamilyComponent} from "../../graphical/family/family.component";
import {BasicfamilyService} from "../../edit/Basicfamily.service";
import {Person} from "../../core/Person";
import {SvgCanvasComponent} from "ngx-emfular-diagram";

@Component({
  selector: 'app-person-choice',
  imports: [
    FamilyComponent,
    SvgCanvasComponent
  ],
  templateUrl: './person-choice.component.html',
  styles: []
})
export class PersonChoiceComponent {

  viewBox = '0 0 600 600';

  @Input() modelService!: BasicfamilyService
  @Output() choosePerson: EventEmitter<Person> = new EventEmitter();

}
