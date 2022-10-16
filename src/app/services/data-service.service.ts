import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  private user = "test user";
  SharingData = new BehaviorSubject(this.user);//subject
   constructor() { }

 //update value
  changeDataSubject(data: any) {
    this.SharingData.next(data.value);
  }
}