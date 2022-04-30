import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

const approute:Routes=[
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Aboutus',component:AboutusComponent},
  {path:'Course',component:CourseComponent},
  {path:'Contact',component:ContactComponent},

  //always use this at bottom of all routes "**" route
  {path:'**', component:ErrorComponent}   //'**' -> means if any route is performed either right or wrong it will be redirected to error page/
                                          //so always keep this "**" route or "error" route at bottom of all other 
                                          // else it will navigate each route of "wrong" route or "route below it" to the error

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    AboutusComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
