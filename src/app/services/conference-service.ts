import { Injectable, signal } from '@angular/core';
import { Conference } from '../models/conference';

@Injectable({
  providedIn: 'root',
})
export class ConferenceService {

  getAllConferences() {
    return this.conferences();
  }

  getConferenceById(id: number) {
    return this.conferences().find(conference => conference.id === id);
  }
  conferences = signal<Conference[]> ([
    
  ]);
 



}
