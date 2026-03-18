import { Injectable } from '@angular/core';
import ELK from 'elkjs/lib/elk.bundled.js';
import {Person} from "../core/Person";
import {PositionHelper} from "ngx-svg-graphics";

@Injectable({
  providedIn: 'root'
})
export class ElkLayoutService {

  private elk = new ELK();

  constructor() {}

  /**
   * Auto-layout all persons in the family.
   * This will:
   *  1. Build the ELK graph
   *  2. Run the layout
   *  3. Replace each person's BoundingBox (immutable update)
   */
  async autoLayout(persons: Person[]): Promise<void> {
    const elkGraph = this.buildElkGraph(persons);
    console.log('ELK GRAPH', JSON.stringify(elkGraph, null, 2));
    const result = await this.elk.layout(elkGraph);
    console.log("ELK RESULT", result);
    this.applyElkLayout(result, persons);
  }

  /**
   * Build the ELK graph from the current family model.
   */
  private buildElkGraph(persons: Person[]) {
    const children = persons.map(p => ({
      id: p.$gId,
      width: p.position.w,
      height: p.position.h
    }));

    const edges = persons.flatMap(p => {
      const list: any[] = [];

      if (p.father) {
        list.push({
          id: `${p.$gId}_father_${p.father.$gId}`,
          sources: [p.$gId],
          targets: [p.father.$gId]
        });
      }
      if (p.mother) {
        list.push({
          id: `${p.$gId}_mother_${p.mother.$gId}`,
          sources: [p.$gId],
          targets: [p.mother.$gId]
        });
      }
      return list;
    });

    return {
      id: 'root',
      layoutOptions: {
        'elk.algorithm': 'layered',
        'elk.direction': 'DOWN',
        'elk.layered.spacing.nodeNodeBetweenLayers': '50',
        'elk.spacing.nodeNode': '40'
      },
      children,
      edges
    };
  }

  /**
   * Apply the ELK layout back to the persons.
   * This replaces each BoundingBox immutably so Angular updates arrows.
   */
  private applyElkLayout(result: any, persons: Person[]): void {
    for (const child of result.children) {
      const person = persons.find(p => p.$gId === child.id);
      if (!person) continue;

      // IMMUTABLE update — triggers arrow recomputation
      person.position = PositionHelper.newBoundingBox(
          child.x,
          child.y,
          person.position.w,
          person.position.h
      );
    }
  }
}
