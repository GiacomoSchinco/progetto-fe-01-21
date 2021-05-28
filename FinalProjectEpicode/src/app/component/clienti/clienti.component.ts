import { Component, OnInit } from '@angular/core';
import { ClientiService } from 'src/app/service/clienti.service';
import { ComuniService } from 'src/app/service/comuni.service';
import { UtentiService } from 'src/app/service/utenti.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {
  constructor(
    public ClientiService:ClientiService,
    public ComuniService:ComuniService, 
    private router:Router, 
    public UtentiService:UtentiService) { }

  page=1
  pageSize=10
  currentCliente:any
  search:string

  searchCliente(){
    console.log(this.search)
    this.router.navigate(['clienti/search/', this.search]);
  }

  reloadClienti(){
    this.ClientiService.loadClienti(this.page)
  }
  ngOnInit(): void {
    this.ClientiService.loadClienti(1)
    this.ComuniService.reportComuni()
    this.UtentiService.controllToken()
    //console.log(this.ClientiService.token)
  }

}
