import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ConferenceList } from './components/conference-list/conference-list';
import { Details } from './components/details/details';
import { UserProfile } from './components/user-profile/user-profile';
import { Notifications } from './components/notifications/notifications';
import { FriendsList } from './components/friends-list/friends-list';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component:Home},
    {path:"profile", component:UserProfile},
    {path:"notifications", component:Notifications},
    {path:"friends", component:FriendsList},
    {path:"conferences", component:ConferenceList},
    {path:"details/:id", component:Details},
    {path:"**", redirectTo:"home", pathMatch:"full"}
];
