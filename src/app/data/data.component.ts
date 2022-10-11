import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';
import { Iuser } from '../shared/model/Data';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  dataArr: Iuser[] = [];
  
  constructor(private mydataService: MydataService) { 
   
  }

  ngOnInit() {
    this.mydataService.getdata()
        .subscribe(data => {
          // console.log(data);
     this.dataArr = data;
    //  console.log(this.dataArr)
     this.dataArr.map(
      ele => {
       return ele.age = 20
      }
      
      
     )
    //  console.log(this.dataArr);
   })
  
  }

}

