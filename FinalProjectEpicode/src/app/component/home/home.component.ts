import { Component, OnInit } from '@angular/core';
import { faCoffee, faHome ,faUser, faBook, faAd, faCoins } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( ) { }
  faCoffee = faCoffee;
  faHome= faHome;
  faUser=faUser
  faBook=faBook
  faCoin=faCoins

  ngOnInit(): void {
  }

}
