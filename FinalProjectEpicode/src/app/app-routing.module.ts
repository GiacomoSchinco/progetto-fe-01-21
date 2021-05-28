import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from './service/guard.service';

import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';

import { ClientiComponent } from './component/clienti/clienti.component';
import { NewClienteComponent } from './component/clienti/new-cliente/new-cliente.component';
import { EditClienteComponent } from './component/clienti/edit-cliente/edit-cliente.component';
import { FattureClienteComponent } from './component/clienti/fatture-cliente/fatture-cliente.component';
import { SearchClienteComponent } from './component/clienti/search-cliente/search-cliente.component';

import { UtentiComponent } from './component/utenti/utenti.component';

import { SignupComponent } from './component/signup/signup.component';

import { FattureComponent } from './component/fatture/fatture.component';
import { EditFatturaComponent } from './component/fatture/edit-fattura/edit-fattura.component';
import { NewFatturaComponent } from './component/fatture/new-fattura/new-fattura.component';

import { Page404Component } from './component/page404/page404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'utenti', component: UtentiComponent, canActivate:[GuardService] },

  { path: 'clienti', component: ClientiComponent, canActivate:[GuardService] },
  { path: 'clienti/edit/:id', component: EditClienteComponent, canActivate:[GuardService] },
  { path: 'clienti/new', component: NewClienteComponent, canActivate:[GuardService] },
  { path: 'fatture/cliente/:id', component: FattureClienteComponent, canActivate:[GuardService] },
  { path: 'clienti/search', component: SearchClienteComponent, canActivate:[GuardService] },

  
  { path: 'fatture', component: FattureComponent, canActivate:[GuardService] },
  { path: 'fatture/edit/:id', component: EditFatturaComponent, canActivate:[GuardService] },
  { path: 'fatture/new', component: NewFatturaComponent, canActivate:[GuardService] },
  { path: '**', component: Page404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
