import {Component} from '@angular/core';
import {
  EditButtonDef,
  ModelEditingBarComponent,
  BasicEditorComponent,
} from "ngx-emfular-integration";

import { BasicfamilyService } from "../edit/Basicfamily.service";
import {FamilyComponent} from "../graphical/family/family.component";
import {PersonDetailsService} from "../details/person-details.service";
import {Person} from "../core/Person";
import {HttpClient} from "@angular/common/http";

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
    public personDetailsService: PersonDetailsService,
    public modelService: BasicfamilyService,
    public http: HttpClient,
  ) {
    this.sidebarButtons = [
      {
        label: "Sample model",
        action: () => {
          this.loadExample()
        }
      },
      {
        label: "Auto- Layout",
        action: () => {this.modelService.autoLayout()}
      },
      {
        label: "Man",
        icon: "assets/Man.gif",
        action: () => {
          const res = this.modelService.createMan()
          if(res){
            this.personDetailsService.openDetails(res)
          }
        }
      },
      {
        label: "Woman",
        icon: "assets/Woman.gif",
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

  loadExample() {
    this.http.get('assets/big-family-example.json').subscribe(json => {
      this.modelService.loadFromJson(json);
    });
  }


}
