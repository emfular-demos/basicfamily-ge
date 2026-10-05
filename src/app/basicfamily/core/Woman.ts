import { eClass } from 'emfular-core'
import { basicfamilyMeta } from './_meta_';
import { Person } from './Person';

@eClass(basicfamilyMeta, "Woman")
export class Woman extends Person  {

  constructor() {
    super();
  }




}
