import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentTemplateComponent } from './components/content-template/content-template.component';

import { HomeComponent } from './components/home/home.component';
import { TemporaryComponent } from './components/temporary/temporary.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},

  { path: 'home', component: HomeComponent},

  { path: 'temp', component: TemporaryComponent},
  { path: 'template', component: ContentTemplateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
