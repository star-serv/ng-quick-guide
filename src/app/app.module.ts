import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultHomeComponent } from './components/default-home/default-home.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TypescriptComponent } from './topics/typescript/typescript.component';
import { TemporaryComponent } from './components/temporary/temporary.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultHomeComponent,
    HomeComponent,
    TypescriptComponent,
    TemporaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
