import { Component, OnInit } from '@angular/core';
import { UtentiService } from 'src/app/service/utenti.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public ServiceUtenti:UtentiService) { }
  faUser=faUser
  
  
  datiLogin = {username: "", password: ""}




  ngOnInit(): void {
  }

}
