import {Component, Input} from '@angular/core';
import {Family} from "../../core/Family";
import {NgForOf} from "@angular/common";
import {PersonComponent} from "../person/person.component";

@Component({
  selector: '[family]',
  imports: [
    NgForOf,
    PersonComponent
  ],
  templateUrl: './family.component.svg',
  styleUrl: './family.component.css'
})
export class FamilyComponent {
  @Input() family!: Family;

}
