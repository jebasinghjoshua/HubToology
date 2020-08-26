import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourceModel } from '../model/resource.model';
@Injectable({
  providedIn: 'root'
})
export class HupService {
  readonly ROOT_URL: string = 'https://localhost:44338/';
  constructor(private httpClient: HttpClient) { }
  getXml() {

    return this.httpClient.get<string>('assets/mxGraph/topology.xml', { responseType: 'text' as 'json'});
  }

  getResource(clientId: number): Observable<ResourceModel>{
    return this.httpClient.get<ResourceModel>(`${this.ROOT_URL}api/resourcedetail/${clientId}`);
  }

}
