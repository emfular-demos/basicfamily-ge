import { eClass, reference, attribute } from 'emfular'
import type { Woman } from './Woman';
import type { Man } from './Man';
import type { ModelList } from 'emfular';
import { basicfamilyMeta, PersonRefs } from './_meta_';
import { Referencable } from 'emfular';
import {BoundingBox, Positionable, PositionHelper} from "ngx-svg-graphics";

@eClass(basicfamilyMeta, "Person")
export abstract class Person extends Referencable<any>  implements Positionable {

  protected constructor() {
    super();
  }

  @attribute()
  position: BoundingBox = PositionHelper.newBoundingBox(0,0, 32, 32);

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
