import { eClass, reference, attribute } from 'emfular-core'
import type { Woman } from './Woman';
import type { Man } from './Man';
import type { ModelList } from 'emfular-core';
import { basicfamilyMeta, PersonRefs } from './_meta_';
import { Referencable } from 'emfular-core';

@eClass(basicfamilyMeta, "Person")
export abstract class Person extends Referencable<any>  {

  constructor() {
    super();
  }

  @attribute()
  name?: string;

  @reference(PersonRefs.children)
  declare children: ModelList<Person>;

  @reference(PersonRefs.parents)
  declare parents: ModelList<Person>;

  get mother(): Woman|undefined {
		throw new Error('Method not implemented.'); //TODO
  }


  get father(): Man|undefined {
		throw new Error('Method not implemented.'); //TODO
  }

}
