# Typescript installation
npm install -g typescript

# angular installation 
npm install -g @angular/cli

# to create new angular project
ng new "project-name"

ex - "ng new hello-world-1"

* Run the application with the included server after navigating to the workspace folder
 -  cd "file-name"

* to run the angular project at port 4200
* command for generating browser application bundle and running at default server local host 4200
 - ng serve --open    // to serve and open both 
        or write simply
        ng serve      // to only compile/serve  we have to run seperately

        

* if proxy is not set then go to settings and check for proxy in network an internet
  then turn on proxy manually

# to make a new component 
  -  ng generate component "component-name"
  for ex- ng generate component card // where "card" is the name of component

# to make project without any default code OR creating an empty angular project

 - ng new "project-name" --createApplication=false
 - for ex - ng new Projectwithoutdefcode --createApplication=false

 * after this "build' the project 
 * after this 'serve' this project 
 * after this 'add component' and make project

# creating service files 
 * first go to services folder you have created using cd command
 * now when you are in the directory where you have to create services file then 
   - type " ng g service "service name"   // it will create a file for the service you want to create

* naming convention for serivces "anynameofService.service.ts" 

# declaring service in constructor to access it anywhere in project 
  ** always put your services in highest priority file's dependency 

 * generate a service file 
 * write your code there to provide service to other components so that they could be used anywhere 
 * write the name in dependency of file 
 * highest priority is of - app.module.ts "then" -> app.component.ts "then" -> any other component file
 * so try to put in higher priority one 

#  Install Angular Material
 * ng add @angular/material
  - after this it will ask lot of questions answer them