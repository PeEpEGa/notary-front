import { Component } from '@angular/core';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidePanelComponent, MainContentComponent, ClientListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'notary-crm';
}
