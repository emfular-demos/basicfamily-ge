import { Injectable } from '@angular/core';
import { ModelService } from 'ngx-emfular-integration';
import { IoService } from 'ngx-emfular-helper';

import { BasicfamilyHistoryService } from './Basicfamily-history.service';
import { Family } from "../core/Family";
import { Man } from "../core/Man";
import { Woman } from "../core/Woman";
import {ElkLayoutService} from "../graphical/elk-layouting.service";
import {Person} from "../core/Person";

@Injectable({
  providedIn: 'root'
})
export class BasicfamilyService extends ModelService<Family> {

  constructor(
    historyService: BasicfamilyHistoryService,
    ioService: IoService,
	private layoutingService: ElkLayoutService
  ) {
    super(historyService, ioService, Family);
  }

  async autoLayout() {
	  await this.layoutingService.autoLayout(this.model.members);
	  this.saveCurrentState()
  }

  createMan () {
	  const index = this.model.members.filter(p => !p.isWoman).length;
	  const man = new Man();
	  man.name = 'man'+index
	  this.model.members.push(man);
	  this.saveCurrentState();
	  return man;
  }

  createWoman () {
	  const index = this.model.members.filter(p => p.isWoman).length;
	  const woman = new Woman();
	  woman.name = 'woman'+index
	  this.model.members.push(woman);
	  this.saveCurrentState();
	  return woman;
  }

  connectChildAndMother(child: Person, mother: Person) {
	if(mother.isWoman){
		const formerMother = child.mother
		if(formerMother == mother) return;
		if(formerMother) {
			formerMother.children.remove(child)
		}
		child.parents.push(mother);
		this.saveCurrentState();
	}
  }

  removeMother(child: Person) {
	  const mother = child.mother
	  if( mother ) {
		  child.parents.remove(mother);
		  this.saveCurrentState()
	  }
  }

  connectChildAndFather(child: Person, father: Person) {
	  if(!father.isWoman){
		  const formerFather = child.father
		  if(formerFather == father) return;
		  if(formerFather) {
			  formerFather.children.remove(child)
		  }
		  child.parents.push(father);
		  this.saveCurrentState();
	  }
  }

  removeFather(child: Person) {
	  const father = child.father
	  if( father ) {
		  child.parents.remove(father);
		  this.saveCurrentState()
	  }
  }

}
