import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from 'src/models/PeriodicElement';

@Injectable({
  providedIn: 'root'
})
export class PeriodicElementService {
  elementApiUrl = 'http://localhost:3000/PeriodicElements';

  constructor(
    private http: HttpClient
  ) { }

  getElements(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>(this.elementApiUrl)
  }

  createElement(element: PeriodicElement): Observable<PeriodicElement> {
    return this.http.post<PeriodicElement>(this.elementApiUrl, element)
  }

  deleteElement(id: number): Observable<any> {
    return this.http.delete<any>(`${this.elementApiUrl}/${id}`)
  }
}
