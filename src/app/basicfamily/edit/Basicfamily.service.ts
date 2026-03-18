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
	  const man = new Man();
	  this.model.members.push(man);
	  this.saveCurrentState();
	  return man;
  }

  createWoman () {
	  const woman = new Woman();
	  this.model.members.push(woman);
	  this.saveCurrentState();
	  return woman;
  }

}
