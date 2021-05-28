import { Component, OnInit } from '@angular/core';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { UtentiService } from 'src/app/service/utenti.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public utentiService: UtentiService) { }
  faSignature=faFileSignature

  newSignup={
    username: "",
    email: "",
    password: "",
    role:[""]
  }

  signUp(){
    console.log(this.newSignup)
    this.utentiService.signup(this.newSignup)
  }

  ngOnInit(): void {
  }

}
