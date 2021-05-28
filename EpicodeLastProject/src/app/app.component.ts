import { Component } from '@angular/core';
import { UtentiService } from './service/utenti.service';
import { GuardService } from './service/guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Corporate Mundo';
  constructor(public UtentiService:UtentiService, public guard:GuardService, private router:Router){}
  navbarCollapsed = true;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
}

  logoOut(){
    this.UtentiService.isLogged=false
    localStorage.removeItem('Token');
    alert('Log Out effettuato. Ti riporto alla Home')
    this.navigateTo()
  }
  navigateTo(){
    this.router.navigate([''])
  }


  ngOnInit(){
    if (localStorage.getItem('Token')) {
      this.UtentiService.isLogged=true
    }else{this.UtentiService.isLogged=false}
  }
}
