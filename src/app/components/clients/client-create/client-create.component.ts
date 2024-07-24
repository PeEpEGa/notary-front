import { Component, Inject, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, Validators, ReactiveFormsModule } from '@angular/forms';
import { Client, LoyaltyStatus } from '../../../models/client.model';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ClientsService } from '../../../services/clients.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-client-create',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, ReactiveFormsModule],
  templateUrl: './client-create.component.html',
  styleUrl: './client-create.component.scss'
})
export class ClientCreateComponent {
  client : Client = new Client('', '', '', '', '', LoyaltyStatus.Bronze, 0);
  clientForm: FormGroup;
  statusMessage: string = ''; 

  constructor(
    private clientsService: ClientsService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ClientCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required]],
      address: ['', Validators.required],
      businessType: ['', Validators.required],
      loyaltyStatus: ['Bronze', Validators.required]
    });
  }
  
  submit(): void {
    if (this.clientForm.valid) {
      const newClient: Client = this.clientForm.value;
      this.clientsService.createClient(newClient).pipe(
        catchError(error => {
          console.error('Error creating client:', error);
          if (error.error && error.error.message) {
            this.statusMessage = `Error: ${error.error.message}`;
          } else {
            this.statusMessage = 'Error creating client. Please try again.';
          }
          return of(null);
        })
      ).subscribe(response => {
        if (response) {
          this.statusMessage = 'Client successfully created.';
          console.log('Client created:', response);
          setTimeout(() => {
            this.dialogRef.close(true);
          }, 2000);
        } else {
          this.statusMessage = 'Client not created. Please try again.';
        }
      });
    }
  }
  
  close(): void {
    this.dialogRef.close();
  }
}
