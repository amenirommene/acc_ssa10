import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-conference-form',
  imports: [ReactiveFormsModule],
  templateUrl: './conference-form.html',
  styleUrl: './conference-form.css',
})
export class ConferenceForm {

  private fb=inject(FormBuilder);
  myForm : FormGroup = new FormGroup({
    title : new FormControl('', [Validators.required, Validators.minLength(3)]),
    description : new FormControl('',Validators.required),
    place : new FormControl(''),
    nbmax : new FormControl(''),
    date: new FormControl(''),
  })
  myForm2 = this.fb.group({
    title : ['', [Validators.required, Validators.minLength(3)]],
    description : ['',Validators.required],
    place : [],
    nbmax : [],
    date: [],
  })

  isValid = toSignal(this.myForm.statusChanges, {initialValue:"INVALID"});
  myFormValue=toSignal(this.myForm.valueChanges);
}
