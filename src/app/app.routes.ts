import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ConferenceList } from './components/conference-list/conference-list';
import { Details } from './components/details/details';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component:Home},
    {path:"conferences", component:ConferenceList},
    {path:"details/:id", component:Details},
    {path:"**", redirectTo:"home", pathMatch:"full"}
];
