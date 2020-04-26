import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BakeryItemServiceService {
  private baseURL = "http://localhost:8686/api/";

  constructor(private http: HttpClient) { }

  getItemList(): Observable<any>{
    return this.http.get('${baseURL}' + 'item-list');
  }

  createItem(item: Object): Observable<Object>{
    return this.http.post('${this.baseURL}' + 'save-items', item);
  }

  updateItem(id: number, value: any):Observable<Object>{
    return this.http.post('${this.baseURL}/update-item/${id}', value);
  }

  getItemById(id: number): Observable<any>{
    return this.http.delete('${this.baseURL}/delete-item/${id}', {responseType: 'text'});
  }

  
}
