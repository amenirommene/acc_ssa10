import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-conference-form',
  imports: [ReactiveFormsModule],
  templateUrl: './conference-form.html',
  styleUrl: './conference-form.css',
})
export class ConferenceForm {

  myForm : FormGroup = new FormGroup({
    title : new FormControl('', [Validators.required, Validators.minLength(3)]),
    description : new FormControl('',Validators.required),
    place : new FormControl(''),
    nbmax : new FormControl(''),
    date: new FormControl(''),
  })
}
