import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  Component3Data: any = '';
  constructor(private DataSharing: DataServiceService) {
    DataSharing.SharingData.subscribe((res: any) => {
      debugger
      this.Component3Data = res;
    })
  }

  ngOnInit(): void {
  }
  onSubmit(data: any) {
    this.DataSharing.changeDataSubject(data);
  }
}