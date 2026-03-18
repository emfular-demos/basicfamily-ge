import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Family} from "../../core/Family";
import {NgForOf} from "@angular/common";
import {PersonComponent} from "../person/person.component";
import {Person} from "../../core/Person";
import {MarkersComponent} from "../helper/markers/markers.component";

@Component({
  selector: '[family]',
  imports: [
    NgForOf,
    PersonComponent,
    MarkersComponent
  ],
  templateUrl: './family.component.svg',
  styleUrl: './family.component.css'
})
export class FamilyComponent {
  @Input() family!: Family;
  @Output() chosePerson = new EventEmitter<Person>();

}
