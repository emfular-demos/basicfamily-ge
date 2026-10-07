import {Component} from '@angular/core';
import {NgIf} from "@angular/common";

import {
  ActionButtonDef,
  BasicEditorComponent,
  ModelSpecificPaletteComponent,
} from "ngx-emfular-integration";

import { BasicfamilyService } from "../edit/Basicfamily.service";
import {FamilyComponent} from "../graphical/family/family.component";
import {PersonDetailsService} from "../details/person-details.service";
import {Person} from "../core/Person";
import {PersonBottomPanelComponent} from "../details/person-bottom-panel/person-bottom-panel.component";

@Component({
  selector: 'Basicfamily-editor',
  imports: [
    BasicEditorComponent,
    FamilyComponent,
    ModelSpecificPaletteComponent,
    NgIf,
    PersonBottomPanelComponent,
  ],
  templateUrl: './Basicfamily-editor.component.html',
  styleUrl: './Basicfamily-editor.component.css'
})
export class BasicfamilyEditorComponent{

  svgwidth = 1500;
  svgheigth = 500;
  sidebarButtons: ActionButtonDef[] = [];
  selectedPersonForBottomView: Person | null = null;

  constructor(
    public personDetailsService: PersonDetailsService,
    public modelService: BasicfamilyService,
  ) {
    this.sidebarButtons = [
      {
        label: "Auto- Layout",
        action: () => {this.modelService.autoLayout()}
      },
      {
        label: "Man",
        action: () => {
          const res = this.modelService.createMan()
          if(res){
            this.personDetailsService.openDetails(res)
          }
        }
      },
      {
        label: "Woman",
        action: () => {
          const res = this.modelService.createWoman()
          if(res){
            this.personDetailsService.openDetails(res)
          }
        }
      }
    ]
  }

  choose(element: Person) {
    this.personDetailsService.openDetails(element)
  }

  openBottomView(person: Person) {
    this.selectedPersonForBottomView = person;
  }

  closeBottomView() {
    this.selectedPersonForBottomView = null;
  }

}
