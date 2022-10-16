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
  public universityListByName = <University>{};
  public isLoading: boolean = false;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    console.log("start call");
    this.getAllUniversity();
  }

  getAllUniversity(){
    this.isLoading = true;
    this.commonService.getAll().subscribe( (response)=>{
      this.universityList = response;
      this.isLoading = false;
    });
  }

  getDetailByName(name: string){
    this.isLoading = true;
    this.commonService.getDetailByName(name).subscribe(
      (res)=>{
        this.universityListByName = res;
        this.isLoading = false;
      }      
    )
    console.log(JSON.stringify(this.universityListByName));
  }
}
