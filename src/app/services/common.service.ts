import { HttpClient,  HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { University } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})

export class CommonService {  
  
  private baseUrl = "http://localhost:3000/universities";

  constructor(private http: HttpClient) { }

  private errorHandler(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  getAll(): Observable<University[]>{
    return this.http.get<University>(this.baseUrl)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getDetailByName(name: string): Observable<University>{
    return this.http.get<University>(this.baseUrl+'/?cnome='+name).pipe(catchError(this.errorHandler));
  }

}