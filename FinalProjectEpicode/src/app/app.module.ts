import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientiComponent } from './component/clienti/clienti.component';
import { UtentiComponent } from './component/utenti/utenti.component';
import { FattureComponent } from './component/fatture/fatture.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { Page404Component } from './component/page404/page404.component';
import { EditFatturaComponent } from './component/fatture/edit-fattura/edit-fattura.component';
import { NewFatturaComponent } from './component/fatture/new-fattura/new-fattura.component';
import { NewClienteComponent } from './component/clienti/new-cliente/new-cliente.component';
import { EditClienteComponent } from './component/clienti/edit-cliente/edit-cliente.component';
import { FattureClienteComponent } from './component/clienti/fatture-cliente/fatture-cliente.component';
import { SearchClienteComponent } from './component/clienti/search-cliente/search-cliente.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ClientiComponent,
    UtentiComponent,
    FattureComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    Page404Component,
    EditFatturaComponent,
    NewFatturaComponent,
    NewClienteComponent,
    EditClienteComponent,
    FattureClienteComponent,
    SearchClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
