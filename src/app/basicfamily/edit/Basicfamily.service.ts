import { Injectable } from '@angular/core';
import { ModelService } from 'ngx-emfular-integration';
import { IoService } from 'ngx-emfular-helper';

import { BasicfamilyHistoryService } from './Basicfamily-history.service';
import { Family } from "../core/Family";
import { Man } from "../core/Man";
import { Woman } from "../core/Woman";

@Injectable({
  providedIn: 'root'
})
export class BasicfamilyService extends ModelService<Family> {

  constructor(
    historyService: BasicfamilyHistoryService,
    ioService: IoService,
	) {
    super(historyService, ioService, Family);
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
	  const index = this.model.members.filter(p => !p.isWoman).length;
	  const woman = new Woman();
	  woman.name = 'woman'+index
	  this.model.members.push(woman);
	  this.saveCurrentState();
	  return woman;
  }

}
