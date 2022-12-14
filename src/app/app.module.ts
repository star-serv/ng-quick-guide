import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TemporaryComponent } from './components/temporary/temporary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './material/sidenav/sidenav.component';
import { ContentTemplateComponent } from './components/content-template/content-template.component';
import { FormsModule } from '@angular/forms';
import { BasicCoreComponent } from './examples/basic-core.component';
import { DataBindingParent } from './examples/data-binding-parent.component';
import { DataBindingChild } from './examples/data-binding-child.component';
import { PassingDataComponent } from './topics/passing-data.component';

// material 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemporaryComponent,
    SidenavComponent,
    ContentTemplateComponent,
    BasicCoreComponent,
    DataBindingChild,
    DataBindingParent, 
    PassingDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
