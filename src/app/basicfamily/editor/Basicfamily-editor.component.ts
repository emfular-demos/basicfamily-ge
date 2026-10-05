import {Component} from '@angular/core';
import {
  ActionButtonDef,
  BasicEditorComponent,
  GraphicalTreeDetailsService,
  ModelSpecificPaletteComponent,
} from "ngx-emfular-integration";
import { Referencable} from "emfular-core";

import { BasicfamilyService } from "../edit/Basicfamily.service";
import { Family } from "../core/Family";
import {FamilyComponent} from "../graphical/family/family.component";

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
    public treeDetailsService: GraphicalTreeDetailsService<Family>,
    public modelService: BasicfamilyService,
  ) {
    this.sidebarButtons = [
      {
        label: "Family",
        action: () => {
          const res = this.modelService.createFamily()
          if(res){
            this.treeDetailsService.openDetails(res, this.modelService)
          }
        }
      },
{
        label: "Man",
        action: () => {
          const res = this.modelService.createMan()
          if(res){
            this.treeDetailsService.openDetails(res, this.modelService)
          }
        }
      },
{
        label: "Woman",
        action: () => {
          const res = this.modelService.createWoman()
          if(res){
            this.treeDetailsService.openDetails(res, this.modelService)
          }
        }
      }
    ]
  }

  choose(element: Referencable<any>) {
    this.treeDetailsService.openDetails(element, this.modelService)
  }

}
