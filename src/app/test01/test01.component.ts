import {Component, OnInit} from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.scss']
})
export class Test01Component implements OnInit {

  public buttons = new Map<string, string>()  
  constructor(private dataService:DataService) {
  }

  ngOnInit() {

    this.dataService.fetchData("data").subscribe ( ( data ) => {
      let dataEntry = JSON.parse(JSON.stringify(data));
    for (var value in dataEntry) {  
       this.buttons.set(value,dataEntry[value].text)  
    }  
    console.log("map:" + this.buttons.size);  
       
    });
  }
}
