import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PartyListComponent } from './pages/party-list/party-list.component';
import { PartyFormComponent } from './pages/party-form/party-form.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'party-list', component: PartyListComponent},
    {path: 'party-form', component: PartyFormComponent},
    {path: '', component: HomeComponent},
    {path: '**', component: PageNotFoundComponent}
];
