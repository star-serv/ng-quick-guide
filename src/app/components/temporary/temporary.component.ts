import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temporary',
  templateUrl: './temporary.component.html',
  styleUrls: ['./temporary.component.css']
})
export class TemporaryComponent implements OnInit {

  mylist: any[] = [1,2,4,6];
  get: any = "";

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.mylist.push(this.get);
    this.get = null;
  }

}
