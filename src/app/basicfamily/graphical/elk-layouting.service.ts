import { Injectable } from '@angular/core';
import ELK from 'elkjs/lib/elk.bundled.js';
import {Person} from "../core/Person";
import {SvgPositionChangeService} from "ngx-emfular-diagram";

@Injectable({
  providedIn: 'root'
})
export class ElkLayoutService {

  private elk = new ELK();

  constructor(private svgAccessService: SvgPositionChangeService,) {}

  /**
   * Auto-layout all persons in the family, layer by layer
   */
  async autoLayout(persons: Person[]): Promise<void> {
    const elkGraph = this.buildElkGraph(persons);
    const result = await this.elk.layout(elkGraph);
    this.applyElkLayout(result, persons);
  }

  private buildElkGraph(persons: Person[]) {
    const children = persons.map(p => ({
      id: p.$gId,
      width: 82,
      height: 32
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
        'elk.direction': 'UP',
        'elk.layered.spacing.nodeNodeBetweenLayers': '50',
        'elk.spacing.nodeNode': '40'
      },
      children,
      edges
    };
  }

  private applyElkLayout(result: any, persons: Person[]): void {
    for (const child of result.children) {
      const person = persons.find(p => p.$gId === child.id);
      if (!person) continue;

      person.position.x = child.x
      person.position.y = child.y
      this.svgAccessService.notifyPositionChange(person.$gId)
    }
  }
}
