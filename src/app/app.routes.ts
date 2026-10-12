import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ConferenceList } from './components/conference-list/conference-list';
import { Details } from './components/details/details';
import { UserProfile } from './components/user-profile/user-profile';
import { Notifications } from './components/notifications/notifications';
import { FriendsList } from './components/friends-list/friends-list';
import { Dashboard } from './admin/dashboard/dashboard';
import { Users } from './admin/users/users';
import { Speakers } from './admin/speakers/speakers';
import { Admin } from './admin/admin/admin';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"}, //au chargement de l'application, on redirige vers la page d'accueil
    {path:"home", component:Home},
    {path:"profile", loadComponent:
        ()=>import('./components/user-profile/user-profile').then(m=>m.UserProfile)},
    {path:"notifications", loadComponent:
        ()=>import('./components/notifications/notifications').then(m=>m.Notifications)
    },
    {path:"friends", loadComponent:
        ()=>import('./components/friends-list/friends-list').then(m=>m.FriendsList)},
    {path:"conferences", loadComponent:
        ()=>import('./components/conference-list/conference-list').then(m=>m.ConferenceList)},
    {path:"details/:id", component:Details},
    {path:"admin", component:Admin, loadChildren:()=>import('./admin/admin.routes').then(m=>m.ADMIN_ROUTES)},
    {path:"**", redirectTo:"home", pathMatch:"full"} //doit être placé à la fin
];
