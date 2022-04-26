import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  //implemented OnInit 

  /* flow : first implemented OnInit with class "implements OnInit" ->
            then  Declared property form Group ->"myReactiveForm"-> 
            then create method ngOnInit "ngOnInit()" ->then declared all property
            to be bind with various fields -> after this bind these "form controls using"  */
  myReactiveForm:FormGroup;                //create new property of FormGroup
  ngOnInit(): void {
    this.myReactiveForm=new FormGroup({   //for making connection and save in this 

      userinfo:new FormGroup({

        'username1':new FormControl(null ,
                       [Validators.required, Validators.minLength(3)]  //when there are multiple validators we have to put them in square brackets
                         ),
 
        'email1':new FormControl(null,
                      [Validators.email, Validators.required] 
                        )

      }),


      'password1':new FormControl(null,
                                   Validators.required    //no []square brackets required if there is single validtors
                                    ),
      
      'members':new FormArray([      //using form array
        new FormControl(null)
      ])


    });
    // throw new Error('Method not implemented.');
  }
  onSubmit(){
    console.warn(this.myReactiveForm);
  }

  getControl(){
    return (this.myReactiveForm.get('members') as FormArray).controls;
  }

  addMember(){
    (<FormArray>this.myReactiveForm.get('members')).push(new FormControl(null));
  }
  title = 'Interactive_reactive_form_in_spa';


}

// add following in tsconfig.json  because in angular 13 lot of strict checks are there
//   so to avoid errors we need to put them false
// "strictPropertyInitialization": false,    //added for reactive forms
// "strictNullChecks": false,                // added for reactive forms
