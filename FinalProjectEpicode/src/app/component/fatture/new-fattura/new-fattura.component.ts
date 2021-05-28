import { Component, OnInit } from '@angular/core';
import { FattureService } from 'src/app/service/fatture.service';


@Component({
  selector: 'app-new-fattura',
  templateUrl: './new-fattura.component.html',
  styleUrls: ['./new-fattura.component.css']
})
export class NewFatturaComponent implements OnInit {
  constructor(public FattureService:FattureService) { }
  newFattura = {
    data: "",
    numero: 0,
    anno: 0,
    importo: 0,
    stato: {
      id: 1,
      nome: ""
    }
    , cliente: { id: 0 }
  }
  data2=new Date
  id = this.FattureService.arrayFatture.totalElements + 1;
  numero = this.FattureService.arrayFatture.totalElements + 1;
  data:any
  anno = this.data2.getFullYear()
  statoNome: any
  statoId:number
  importo: any
  cliente: number

  postFattura(){
    if(this.statoNome== "PAGATA"){this.statoId=1}else{this.statoId=2}
    this.newFattura = {
      data: this.data,
      numero: this.numero,
      anno: this.anno,
      importo: this.importo,
      stato: {
        id: this.statoId,
        nome: this.statoNome
      }
      , cliente: { id: this.cliente }
    }
    console.log(this.newFattura)
    
    this.FattureService.addFattura(this.newFattura)
    this.statoNome=""
    this.importo=""
    this.statoId=0
    this.cliente=0
  }

  ngOnInit(): void {
  }

}
