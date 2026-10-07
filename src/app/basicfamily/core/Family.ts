import { eClass, reference, attribute } from 'emfular-core'
import type { Person } from './Person';
import type { ModelList } from 'emfular-core';
import { basicfamilyMeta, FamilyRefs } from './_meta_';
import { Referencable } from 'emfular-core';

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
