import { Component, Input, OnInit } from '@angular/core';
import { University } from '../models/common.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() "university":University;
  
  constructor() { }

  ngOnInit(): void {
  }

}
