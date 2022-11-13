import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  template: ``
})
export class TypescriptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
    //data types
    //boolean, number, string, 
    let name = '';
  
  
  }

}


/*

Angular uses Typescript

Some Typescript Features:
* static typing
  - let name: string
  - let age: number

* interfaces
  - interface ICat {
    name:string
    age?:number  // ? optional
  }

* class properties
  - class Cat {
    name: string
    color: stirng
    constructor (name) {
      this.name = name
    }
  }

* public/private accessiblity 
  - private name:string // public by default 


  
*/