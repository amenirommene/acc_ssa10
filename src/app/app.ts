import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { Notifications } from './components/notifications/notifications';

@Component({
  selector: 'app-root',
  imports: [
    Header, Footer, Navbar, RouterOutlet
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
