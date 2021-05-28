import { Component, OnInit } from '@angular/core';
import { UtentiService } from 'src/app/service/utenti.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {

  constructor(public utentiService: UtentiService) { }
  page=1
  pageSize=20

  ngOnInit(): void {
    this.utentiService.reportUtenti()
  }
}
