import { Component } from '@angular/core';
import { ClientListComponent } from '../client-list/client-list.component';
import { ClientDetailsComponent } from '../client-details/client-details.component';
import { ClientCreateComponent } from '../client-create/client-create.component';
import { IClient } from '../../../models/client.model';

@Component({
  selector: 'app-client-container',
  standalone: true,
  imports: [ClientListComponent, ClientDetailsComponent, ClientCreateComponent],
  templateUrl: './client-container.component.html',
  styleUrl: './client-container.component.scss'
})
export class ClientContainerComponent {
  public selectedCl: IClient | undefined;

  setClient(client: IClient): void {
    this.selectedCl = client;
  }
}
