import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UtentiService {


  constructor(public Http: HttpClient, private router:Router) { }
  //LogIn
  urlLogin = 'https://epicode.online/epicodebeserviceunauth/api/auth/login';
  isLogged = false
  accessUser: any
  token: any
  
  controllUsers(userlogin) {
    this.Http.post(this.urlLogin, userlogin)
      .subscribe(
        response => {
          console.log('next: ' + JSON.stringify(response));
          this.accessUser = response;
          localStorage.setItem('Token', JSON.stringify(this.accessUser.tokenType + ' ' + this.accessUser.accessToken))
          this.isLogged = true
          alert('Sei Loggato, buona navigazione');
          setTimeout(() => {
            this.router.navigate(['utenti'])
          }, 500);
          
        },
        error => console.error('error: ' + JSON.stringify(error)),
        () => console.log('completed')
      );
  };
  signup(user) {
    this.Http.post('https://epicode.online/epicodebeserviceunauth/api/auth/signup', user)
      .subscribe(
        response => {
          console.log('next: ' + JSON.stringify(response));
        },
        error => console.error('error: ' + JSON.stringify(error)),
        () => console.log('completed')
      );
  };

  controllToken() {
    if (localStorage.getItem('Token')) {
      this.token = localStorage.getItem('Token');
      console.log(this.token)
    }
  }

  // Utenti
  urlUtenti = 'https://epicode.online/epicodebeserviceunauth/api/users?page=0&size=200&sort=id,ASC'
  arrayUtenti: any;
  reportUtenti() {
    this.Http.get(this.urlUtenti)
      .subscribe(
        response => { console.log(response), this.arrayUtenti = response },
        error => console.error('error: ' + JSON.stringify(error)),
        () => console.log('completed')
      );
  }
}


