import {Component} from '@angular/core';
import {
  TreeModelDetailsService,
  EditButtonDef,
  ModelEditingBarComponent,
  BasicEditorComponent,
} from "ngx-emfular-integration";
import { BoundingBox } from 'ngx-svg-graphics';
import { Referencable} from "emfular";

import { BasicfamilyService } from "../edit/Basicfamily.service";
import { Family } from "../core/Family";
import {FamilyComponent} from "../graphical/family/family.component";

@Component({
  selector: 'Basicfamily-editor',
  imports: [
    ModelEditingBarComponent,
    BasicEditorComponent,
    FamilyComponent
  ],
  templateUrl: './Basicfamily-editor.component.html',
  styleUrl: './Basicfamily-editor.component.css'
})
export class BasicfamilyEditorComponent{

  svgwidth = 1500;
  svgheigth = 1000;
  sidebarButtons: Array<EditButtonDef> | null = null;

  constructor(
    public treeDetailsService: TreeModelDetailsService<Family>,
    public modelService: BasicfamilyService,
  ) {
    this.sidebarButtons = [
      {
        label: "Refresh Layout",
        action: () => {this.modelService.autoLayout()}
      },
      {
        label: "Man",
        icon: "assets/Man.gif",
        action: () => {
          const res = this.modelService.createMan()
          if(res){
            this.treeDetailsService.openDetails(res, this.modelService)
          }
        }
      },
      {
        label: "Woman",
        icon: "assets/Woman.gif",
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
