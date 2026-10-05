import { eClass } from 'emfular-core'
import { basicfamilyMeta } from './_meta_';
import { Person } from './Person';

@eClass(basicfamilyMeta, "Man")
export class Man extends Person  {

  constructor() {
    super();
  }




}
