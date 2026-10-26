import { Component, inject, signal } from '@angular/core';
import { Conference } from '../../models/conference';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { ConferenceDetails } from '../conf-details/conference-details';
import { ConferenceService } from '../../services/conference-service';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-conference-list',
  imports: [CommonModule, UpperCasePipe, DatePipe, ConferenceDetails, RouterLink],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})


export class ConferenceList {
  conferenceSelectionnee: Conference | null = null;
  choisirConference(conference: Conference) {
    this.conferenceSelectionnee = conference;
  }
  couleurBouton(conference: Conference) {
    if (conference.maxParticipants - conference.nbParticipants > 20) {
      return 'vert';
    } else if (conference.maxParticipants - conference.nbParticipants < 5) {
      return 'rouge';
    } else {    
      return 'orange';
    }
  }
  reserve(conference: Conference) {}
 today = new Date().toISOString().split('T')[0];
 

confs=inject(ConferenceService);
//conferences = signal<Conference[]>(this.confs.getAllConferences());
conferences = toSignal(this.confs.getAllConferences(),{initialValue:[]});


}
