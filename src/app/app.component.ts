import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicfamilyEditorComponent } from './basicfamily/editor/Basicfamily-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicfamilyEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'basicfamily-graphical-editor';

  constructor() {}
}
