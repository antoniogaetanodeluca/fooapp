import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  Component2Data: any = '';
  constructor(private DataSharing: DataServiceService) {
    DataSharing.SharingData.subscribe((res: any) => {  
      this.Component2Data = res;
    })
  }

  ngOnInit(): void {
  }
  onSubmit(data: any) {
    this.DataSharing.changeDataSubject(data);
  }
}