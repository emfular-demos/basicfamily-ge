import { ModelDefinition, ReferenceMeta } from "emfular";


export const PersonRefs = {
	children: {
		target: "Person",
		max: -1,
		opposite: "parents"
	} satisfies ReferenceMeta,
	parents: {
		target: "Person",
		max: 2,
		opposite: "children"
	} satisfies ReferenceMeta,
	mother: {
		target: "Woman",
		max: 1,
		//todo: derived
	} satisfies ReferenceMeta,
	father: {
		target: "Man",
		max: 1,
		//todo: derived
	} satisfies ReferenceMeta
};
export const FamilyRefs = {
	members: {
		target: "Person",
		max: -1,
		containment: true
	} satisfies ReferenceMeta
};
export const ManRefs = {
};
export const WomanRefs = {
};

export const basicfamilyMeta: ModelDefinition = {
  name: "basicfamily",
  prefix: "basicfamily",
  uri: "http://www.eclipse.org/sirius/sample/basicfamily#//", //because emfular expects complete uri
  classes: {
    	Person: { references: PersonRefs },
		Family: { references: FamilyRefs },
		Man: { references: ManRefs },
		Woman: { references: WomanRefs },
  }
};
