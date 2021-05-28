import { Component, OnInit } from '@angular/core';
import { ComuniService } from 'src/app/service/comuni.service';
import { ClientiService } from 'src/app/service/clienti.service';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {
  constructor(public ClientiService: ClientiService, public ComuniService: ComuniService) { }

  newCliente = {
    id: this.ClientiService.arrayClienti.totalElements+1, 
    ragioneSociale: "", 
    partitaIva: "", 
    tipoCliente: "", 
    email: "", pec: "", 
    telefono: "", 
    nomeContatto: "", 
    cognomeContatto: "",
    telefonoContatto: "", 
    emailContatto: "",
    indirizzoSedeOperativa: {
      id: 2, via: "", civico: 0, cap: 0, localita: "",
      comune: {
        id: 1, nome: "",
        provincia: {
          id: 1, nome: "", sigla: "",
        }
      }
    },
    indirizzoSedeLegale: {
      id: 1,
      via: "",
      civico: 0,
      cap: 0,
      localita: "",
      comune: {
        id: 1,
        nome: "",
        provincia: {
          id: 1,
          nome: "",
          sigla: ""
        }
      }
    },
    dataInserimento: "",
    dataUltimoContatto: ""
  }
  
  postCliente() {
    console.log(this.newCliente)
    this.ClientiService.addCliente(this.newCliente)

  }






  ngOnInit(): void {
  }
}
