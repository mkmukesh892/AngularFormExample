import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  @ViewChild('f') formsRef: NgForm;
  userSelected = '';
  defaultQuestion = 'teacher';
  answer = '';
  defaultGender = 'male';
  genders = ['male' , 'female', 'impotent' , 'transgender'];
  formSubmitted = false;
  suggestions: string[] = [
    'Tim',
    'Jhon',
    'Aryan'
    ];
  userRecord = {
    userName: '',
    emailEntered: '',
    secretQuestion: '',
    answerGiven: '',
    genderSelected: ''
  }
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    /*console.log('submit');
    console.log(form);
   // console.log(this.formsRef.nativeElement.value);*/
    this.formSubmitted = true;
    this.userRecord.userName = this.formsRef.value.userData.username;
    this.userRecord.emailEntered = this.formsRef.value.userData.email;
    this.userRecord.secretQuestion = this.formsRef.value.secret;
    this.userRecord.answerGiven = this.formsRef.value.questionAnswer;
    this.userRecord.genderSelected = this.formsRef.value.gender;
    this.formsRef.reset();
  }
  onSuggestion() {
    const suggestedName = 'Superuser';
    /*this.formsRef.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });*/
    this.formsRef.form.patchValue({
      userData: {
        username: suggestedName,
        email: ''
      }
    });
  }
  onSignUp() {
    console.log('signup');
    console.log(this.formsRef);
  }
}
