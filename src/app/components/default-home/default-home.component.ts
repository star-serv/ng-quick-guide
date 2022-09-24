import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.css']
})
export class DefaultHomeComponent implements OnInit {

  title = 'ang-guide-app';

  constructor() { }

  ngOnInit(): void {
  }

}
