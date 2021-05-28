import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { UtentiService } from './utenti.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(private router:Router, public UtentiService:UtentiService) { }

  canActivate(){
    if(this.UtentiService.isLogged){
      console.log('Hai il permesso per accedere alla pagina');
      return true;
      
    } else  {
      alert('Non hai il permesso per accedere alla pagina, ti porto al Login');
      this.navigateTo()
      return false;
    }
  }
  navigateTo(){
    this.router.navigate(['login'])
  }
  
}
