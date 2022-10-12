import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-datalinks',
  templateUrl: './datalinks.component.html',
  styleUrls: ['./datalinks.component.css']
})
export class DatalinksComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }




  fetchData=()=>{
   this.myapi.viewdatalinks().subscribe(
    (data)=>{
      this.linkData=data
    }
   )
  }

  linkData:any={}

  ngOnInit(): void {
  }

}
