import { eClass, reference, attribute } from 'emfular-core'
import type { Woman } from './Woman';
import type { Man } from './Man';
import type { ModelList } from 'emfular-core';
import { basicfamilyMeta, PersonRefs } from './_meta_';
import { Referencable } from 'emfular-core';
import { Point2D } from 'ngx-emfular-diagram';

@eClass(basicfamilyMeta, "Person")
export abstract class Person extends Referencable<any>  {

  constructor() {
    super();
  }

  @attribute()
  name?: string;

  @attribute()
  position: Point2D = {x:2, y:2};

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
