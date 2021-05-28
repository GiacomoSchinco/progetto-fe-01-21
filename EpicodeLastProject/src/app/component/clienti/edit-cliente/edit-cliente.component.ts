import { Component, OnInit } from '@angular/core';
import { ClientiService } from 'src/app/service/clienti.service';
import { ComuniService } from 'src/app/service/comuni.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {
  constructor(private myActRoute: ActivatedRoute, public ClientiService:ClientiService, public ComuniService:ComuniService) { }
  clienteId: any;
  editCliente:any;

  putCliente(){
    console.log(this.ClientiService.editCliente)
    this.ClientiService.modifyCliente(this.ClientiService.editCliente)
  }

  ngOnInit(): void {
    this.myActRoute.paramMap
    .subscribe(
      myParams => {
        this.clienteId = myParams.get('id');
        console.log(this.clienteId)
      },
    )
    this.ClientiService.loadSingleCliente(this.clienteId)
  }
}
