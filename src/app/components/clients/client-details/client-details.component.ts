import { Component, Input } from '@angular/core';
import { IClient } from '../../../models/client.model';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [],
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.scss'
})
export class ClientDetailsComponent {
  @Input() public selected: IClient | undefined;
}
