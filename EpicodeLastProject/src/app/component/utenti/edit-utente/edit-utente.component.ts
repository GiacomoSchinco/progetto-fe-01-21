import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtentiService } from 'src/app/service/utenti.service';

@Component({
  selector: 'app-edit-utente',
  templateUrl: './edit-utente.component.html',
  styleUrls: ['./edit-utente.component.css']
})
export class EditUtenteComponent implements OnInit {

  constructor(private myActRoute: ActivatedRoute, public utentiService: UtentiService) { }
  idUser:any;
  found:any

  ngOnInit(): void {
    this.myActRoute.paramMap
      .subscribe(
        myParams => {
          this.idUser = myParams.get('id');
          console.log(this.idUser)
          this.found = this.utentiService.allUsers.content.find(u => u.id == this.idUser);
          console.log(this.found)
        },
      )
  }
}
