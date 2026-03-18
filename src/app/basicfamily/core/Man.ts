import { eClass } from 'emfular'
import { basicfamilyMeta } from './_meta_';
import { Person } from './Person';

@eClass(basicfamilyMeta, "Man")
export class Man extends Person  {

  constructor() {
    super();
  }

  get isWoman(): boolean {
    return false;
  }

}
