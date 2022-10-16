import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  Component1Data: any = '';
  constructor(private DataSharing: DataServiceService) {
    DataSharing.SharingData.subscribe((res: any) => {
      this.Component1Data = res;
    })
  }

  ngOnInit(): void {
    this.Component1Data != null ? console.log("componente 1", this.Component1Data) : null;
  }

  onSubmit(data: any) {
    this.DataSharing.changeDataSubject(data);
  }
}