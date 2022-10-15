import { Component, OnInit } from '@angular/core';
import { University } from '../models/common.model';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public universityList: University[] = [];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    console.log("start call");
    this.getAllUniversity();
  }

  getAllUniversity(){
    
    this.commonService.getAll().subscribe( (response)=>{
      this.universityList = response;
      console.log(this.universityList);
    });
  }

  getDetail(index){
    
  }
}
