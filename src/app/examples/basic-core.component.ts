import { Component } from '@angular/core';

@Component({
  selector: 'basic-core',
  template: '<h1>{{text}}</h1>'
})
export class BasicCoreComponent {
    text: string = "hello world";
}


// this all that is needed for a component
// must be imported into module and its good to go 