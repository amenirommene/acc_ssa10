import { Component, input } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  //name: variable classique
  name:string = 'details works!';
  //id est un signal
  id=input();
}
