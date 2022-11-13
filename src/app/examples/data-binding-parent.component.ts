import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'data-bind-p',
    template: `
        <h1>Parent</h1>
        <p>data: {{ child.childData }}</p>
        <data-bind-c #child></data-bind-c>
        <button (click)="child.funcFromChild(); add(child.childData)">click</button>
        <ul *ngFor="let ele of mylist">
            <li>{{ ele }}</li>
        </ul>
    `
})
export class DataBindingParent {
    mylist = ['data in parent']

    foo = 'yes'

    add(data: any) {
        this.mylist.push(data);
    }
}