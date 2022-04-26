import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';       //import statement for input module
import {MatListModule} from '@angular/material/list';         //import statement for list module 
import {MatTableModule} from '@angular/material/table';       //import statement for the table module



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatInputModule,     //import for the input form 
    MatListModule,      // impot for the list 
    MatTableModule      //import statement for the table module



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
