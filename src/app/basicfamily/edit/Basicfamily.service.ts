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
		return new Man()
	}

	createWoman () {
		return new Woman()
	}

}
