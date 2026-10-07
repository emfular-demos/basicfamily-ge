import {Component} from '@angular/core';
import {
  ActionButtonDef,
  BasicEditorComponent,
  GraphicalTreeDetailsService,
  ModelSpecificPaletteComponent,
} from "ngx-emfular-integration";
import { Referencable} from "emfular-core";

import { BasicfamilyService } from "../edit/Basicfamily.service";
import {FamilyComponent} from "../graphical/family/family.component";
import {PersonDetailsService} from "../details/person-details.service";
import {Person} from "../core/Person";

@Component({
  selector: 'Basicfamily-editor',
  imports: [
    ModelSpecificPaletteComponent,
    BasicEditorComponent,
    FamilyComponent
  ],
  templateUrl: './Basicfamily-editor.component.html',
  styleUrl: './Basicfamily-editor.component.css'
})
export class BasicfamilyEditorComponent{

  svgwidth = 1500;
  svgheigth = 500;
  sidebarButtons: ActionButtonDef[] = [];

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

}
