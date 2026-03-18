import { eClass, reference, attribute } from 'emfular'
import type { Woman } from './Woman';
import type { Man } from './Man';
import type { ModelList } from 'emfular';
import { basicfamilyMeta, PersonRefs } from './_meta_';
import { Referencable } from 'emfular';

@eClass(basicfamilyMeta, "Person")
export abstract class Person extends Referencable<any>  {

  protected constructor() {
    super();
  }

  @attribute()
  name?: string;

  @reference(PersonRefs.children)
  declare children: ModelList<Person>;

  @reference(PersonRefs.parents)
  declare parents: ModelList<Person>;

  get mother(): Woman|undefined {
    return this.parents.find(parent => parent.isWoman);
  }

  get father(): Man|undefined {
	return this.parents.find(parent => !parent.isWoman);
  }

  abstract get isWoman(): boolean

}
