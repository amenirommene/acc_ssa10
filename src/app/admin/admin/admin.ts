import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ConferenceForm } from '../../componentsForms/conference-form/conference-form';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ConferenceForm],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {}
