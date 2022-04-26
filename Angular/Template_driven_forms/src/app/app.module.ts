import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import{ Formsmodule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //imported FormsModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule           //imported FormsModule 
  ],
  providers: [FormsModule    ],    //imported forms module

  bootstrap: [AppComponent]
})
export class AppModule { }
