import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private _apiUrl = 'http://localhost:3000/clients/';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Client[]> {
    return this.http.get<Client[]>(this._apiUrl);
  }

  getUser(id: string): Observable<Client> {
    return this.http.get<Client>(`${this._apiUrl}/${id}`);
  }

  getUsersPaginated(page: number, pageSize: number): Observable<{ clients: Client[], total: number, page: number, pageSize: number }> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('pageSize', pageSize.toString());

    return this.http.get<{ clients: Client[], total: number, page: number, pageSize: number }>(`${this._apiUrl}/paginated`, { params });
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this._apiUrl, client);
  }
}
