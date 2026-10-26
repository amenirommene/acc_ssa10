import { Injectable, signal, inject } from '@angular/core';
import { Conference } from '../models/conference';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConferenceService {
  //injecter le service HttpClient sous le nom de http
private http = inject(HttpClient);

//url
private urlAPI="http://localhost:3000/conferences";


  getAllConferences() : Observable<Conference[]> {
    return this.http.get<Conference[]>(this.urlAPI);
  }

  getConferenceById(id: number) : Observable<Conference> {
     return this.http.get<Conference>(this.urlAPI+'/'+id); 
  }

  addConference(conf:Conference): Observable<Conference>{
    return this.http.post<Conference>(this.urlAPI,conf)
  }

  updateConference(id:number,conf:Conference): Observable<Conference>{
    return this.http.put<Conference>(this.urlAPI+'/'+id,conf)
  }
  deleteConference(id:number): Observable<Conference>{
    return this.http.delete<Conference>(this.urlAPI+'/'+id)
  }



}
