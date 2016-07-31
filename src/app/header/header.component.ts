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
  editTitleText = this.title;
  isEdit: boolean = false;

  num:number = 1;

  constructor() {};

  PlusOne(){
    this.num = this.num + 1;
  };

  EditTitle($event: KeyboardEvent){
    if ($event.keyCode == 13) {
      this.title = this.editTitleText;
    }
  };

  EditTitleDOM($event: KeyboardEvent , input: HTMLInputElement){
    if ($event.keyCode == 13) {
      this.title = input.value;
      this.isEdit = false;
    }
  };

  EnterEdit($event: MouseEvent){
    this.isEdit = true;
    $event.preventDefault();
  };

  ngOnInit() {
  };
}
