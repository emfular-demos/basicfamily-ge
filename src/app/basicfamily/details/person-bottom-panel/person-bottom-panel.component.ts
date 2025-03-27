import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Person} from '../../core/Person';

@Component({
  selector: 'app-person-bottom-panel',
  imports: [NgIf, NgForOf],
  templateUrl: './person-bottom-panel.component.html',
  styleUrl: './person-bottom-panel.component.css'
})
export class PersonBottomPanelComponent {
  @Input() person: Person | null = null;

  getSiblings(person: Person): Person[] {
    const allChildren =  person.parents.flatMap(p => p.children)
    return allChildren.filter(p => p !== person);
  }

  getChildrenWithChildren(person: Person): Person[] {
    return person.children.filter(child => child.children.length > 0);
  }

  getChildrenOf(person: Person): Person[] {
    return [...person.children];
  }

  getCousins(person: Person): Person[] {
    //cousins are children of siblings of parents
    const cousinsWithDuplicates: Person[] =
        person.parents.flatMap(p =>
            this.getSiblings(p).flatMap(s =>
                s.children
            )
        )
    return [...new Set(cousinsWithDuplicates)];
  }

  // helpers
  getPersonIcon(person: Person): string {
    return person.isWoman ? 'assets/Woman.gif' : 'assets/Man.gif';
  }
  
}