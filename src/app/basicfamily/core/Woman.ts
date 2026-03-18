import { eClass } from 'emfular'
import { basicfamilyMeta } from './_meta_';
import { Person } from './Person';

@eClass(basicfamilyMeta, "Woman")
export class Woman extends Person  {

  constructor() {
    super();
  }

  get isWoman(): boolean {
    return true;
  }

}
