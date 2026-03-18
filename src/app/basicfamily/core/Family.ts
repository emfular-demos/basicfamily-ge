import { eClass, reference, attribute } from 'emfular'
import type { Person } from './Person';
import type { ModelList } from 'emfular';
import { basicfamilyMeta, FamilyRefs } from './_meta_';
import { Referencable } from 'emfular';

@eClass(basicfamilyMeta, "Family")
export class Family extends Referencable<any>  {

  constructor() {
    super();
  }

  @attribute()
  name?: string;

  @reference(FamilyRefs.members)
  declare members: ModelList<Person>;
}
