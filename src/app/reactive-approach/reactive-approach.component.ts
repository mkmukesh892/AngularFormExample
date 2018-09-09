import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css']
})
export class ReactiveApproachComponent implements OnInit {
  genders = ['male','female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenUsers.bind(this)]),
      'email': new FormControl(null, [Validators.required , Validators.email], this.forbiddenEmails),
    }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    /**********************************************
     *  Value changes observable to whole form 
     * ********************************************/
    // this.signupForm.valueChanges.subscribe(
    //   (value) => { console.log(value); }
    // );
    /*************************************************
     * Value Changes observable to individual control
     *************************************************/
    // this.signupForm.get('userData.username').valueChanges.subscribe(
    //   (value) => { console.log(value); }
    // );
    /**************************************************
     * Status changes observable to whole form
     **************************************************/
    // this.signupForm.statusChanges.subscribe(
    //   (status) => {console.log(status);}
    // );
    /**************************************************
     * Status changes observable to individual control
    ***************************************************/
    // this.signupForm.get('userData.username').statusChanges.subscribe(
    //   (status) => { console.log(status);}
    // );

    /******************************************************
     * setting form using setValue() method
     ******************************************************/
    // this.signupForm.setValue({
    //   'userData': {
    //     'username': 'Mukesh',
    //     'email': 'mk32@test.com'
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // });
    /********************************************************
     * setting individual control using patchValue() method
     ********************************************************/
    // this.signupForm.patchValue({
    //   'userData': {
    //     'username': 'Tonny'
    //   }
    // });
  }
  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }
  onAddHobby() {
   const control =new FormControl(null, Validators.required);
   (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  forbiddenUsers(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1 ) {
      return {'forbidden' : true}
    }
    return null;
  }
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      },1500);
    });
    return promise;
  }
}
