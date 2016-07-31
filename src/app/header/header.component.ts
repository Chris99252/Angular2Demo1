import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "<i>PandaChris<i>";
  titleLink = "http://blog.miniasp.com/";
  num:number = 1;

  constructor() {};

  PlusOne(){
    this.num=this.num+1
  };

  ngOnInit() {
  };
}
