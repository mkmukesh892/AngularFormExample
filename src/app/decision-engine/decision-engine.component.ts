import { Component, OnInit } from '@angular/core';
import { FormGroup } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-decision-engine',
  templateUrl: './decision-engine.component.html',
  styleUrls: ['./decision-engine.component.css']
})
export class DecisionEngineComponent implements OnInit {
  applicationForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.applicationForm.value);
  }

}
