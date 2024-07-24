import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, IClient } from '../../../models/client.model';
import { ClientsService } from '../../../services/clients.service';
import { MatDialog } from '@angular/material/dialog';
import { ClientCreateComponent } from '../client-create/client-create.component';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [ClientCreateComponent],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss',
})
export class ClientListComponent implements OnInit {
  public clients: Client[] = [];
  public total: number = 0;
  public page: number = 1;
  public pageSize: number = 5;

  @Output() selectedClient = new EventEmitter<IClient>();

  constructor(private _clientsService: ClientsService, public dialog: MatDialog) {}

  openCreateClientDialog(): void {
    const dialogRef = this.dialog.open(ClientCreateComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit(): void {
    // this.loadUsers();
    this.loadClients();
  }

  loadUsers(): void {
    this._clientsService.getUsers().subscribe(clients => {
      // console.log(clients);
      this.clients = clients;
      

      console.log(this.clients);
    });
  }

  loadClients(): void {
    this._clientsService.getUsersPaginated(this.page, this.pageSize).subscribe(response => {
      this.clients = response.clients;
      this.total = response.total;
    });
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadClients();
    }
  }

  nextPage(): void {
    if (this.page * this.pageSize < this.total) {
      this.page++;
      this.loadClients();
    }
  }

  totalPages(): number {
    return Math.ceil(this.total / this.pageSize);
  }

  public selectClient(client: IClient): void {
    this.selectedClient.emit(client);
  }
  
}
