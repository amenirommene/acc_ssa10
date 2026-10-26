import { Component, computed, effect, inject, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConferenceService } from '../../services/conference-service';
import { Router } from '@angular/router';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-form',
  imports: [ReactiveFormsModule],
  templateUrl: './conference-form.html',
  styleUrl: './conference-form.css',
})
export class ConferenceForm {
  private conferenceServ=inject(ConferenceService);
  private fb=inject(FormBuilder);
  private router = inject(Router);
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
myFormValue=toSignal(this.myForm.valueChanges, {initialValue:this.myForm.value});

onSubmit(){
console.log(this.myForm.value);
/*const conf = {
      id: 0, 
      title: this.myForm.value.title ?? '',
      description: this.myForm.value.description ?? '',
      date: this.myForm.value.date ?? '',
      place: this.myForm.value.place ?? '',
      maxParticipants: Number(this.myForm.value.nbmax) || 0, 
      nbParticipants: 0 
    };*/
     const conf  = computed<Conference>(() => {return {
      id: 0, 
      title: this.myFormValue().title ?? '',
      description: this.myFormValue().description ?? '',
      date: this.myFormValue().date ?? '',
      place: this.myFormValue().place ?? '',
      maxParticipants: Number(this.myFormValue().nbmax) || 0, 
      nbParticipants: 0 
}})
    this.conferenceServ.addConference(conf()).subscribe({
  next: (response) => {
    console.log('Succès, conférence enregistrée :', response);
    
  },
  error: (err) => {
    console.error('Erreur lors de la requête :', err);
  },
  complete: () => {
    console.log('Flux terminé (la requête HTTP est complètement finie)');
    this.router.navigate(['/conferences'])
    // Exemple : désactiver un indicateur de chargement (isLoading = false)
  }});
  }

  isValid = toSignal(this.myForm.statusChanges, {initialValue:"INVALID"});
 
  constructor(){
   effect(() => {
    //suivre myFormValue
    console.log(this.myFormValue());
    //suivre formStatus
    console.log(this.isValid());
});
  }
}
