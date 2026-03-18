import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HistoryService } from 'ngx-emfular-helper';
import { JsonOf } from 'emfular';
import { Family } from '../core/Family';

@Injectable({
  providedIn: 'root'
})
export class BasicfamilyHistoryService extends HistoryService<JsonOf<Family>> {

  constructor(@Inject(PLATFORM_ID) platform: Object) {
    super('Basicfamily-history_', 50, platform);
  }
}
