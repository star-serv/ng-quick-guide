import { Component, EventEmitter, Output, OnInit } from "@angular/core"; 

@Component({
    selector: 'data-bind-c',
    template: `
        <h2>Child</h2>
    `
})
export class DataBindingChild {
    
    childData = "data from inside child.";

    funcFromChild() {
       alert("calling from child.");
    }
}