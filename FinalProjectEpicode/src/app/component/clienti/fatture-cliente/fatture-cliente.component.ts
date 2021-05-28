import { Component, OnInit } from '@angular/core';
import { ClientiService } from 'src/app/service/clienti.service';
import { ComuniService } from 'src/app/service/comuni.service';
import { ActivatedRoute } from '@angular/router';
import { FattureService } from 'src/app/service/fatture.service';

@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {
  constructor(private myActRoute: ActivatedRoute, public FattureService:FattureService) { }
  clienteId:any
  page=1
  pageSize=20

  reloadFatture(){
    this.FattureService.loadFattureCliente(this.clienteId, this.page)
  }

  ngOnInit(): void {
    this.myActRoute.paramMap
    .subscribe(
      myParams => {
        this.clienteId = myParams.get('id');
        console.log(this.clienteId)
      },
    )
    this.FattureService.loadFattureCliente(this.clienteId, this.page)
  }

}
