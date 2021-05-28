import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FattureService {
  constructor(public HttpFatture: HttpClient) { }

  urlFatture = 'https://epicode.online/epicodebeservice/api/fatture/'
  arrayFatture: any;
  editFattura: any;
  arrayFattureCliente: any

  token= localStorage.getItem('Token')
  header = new HttpHeaders().set('Authorization', this.token.slice(1,-1));

  //carico fatture
  loadFatture(page) {
    this.HttpFatture.get(this.urlFatture + '?page=' + (page - 1) + '&sort=id,ASC',{headers: this.header})
      .subscribe(
        response => { this.arrayFatture = response },
        error => console.error('error: ' + JSON.stringify(error)),
        () => console.log('completed')
      )
  }

  //aggiungi Fattura
  addFattura(newFattura) {
    this.HttpFatture.post(this.urlFatture,  newFattura , {headers: this.header})
      .subscribe(
        response => { console.log(JSON.stringify(response)), window.alert('Fattura Salvata') },
        error => { console.error('error: ' + JSON.stringify(error)) },
        () => console.log('completed')
      )
  }
  
  //Modifica Fattura
  modifyFattura(modFattura) {
    this.HttpFatture.put(this.urlFatture + modFattura.id, modFattura, {headers: this.header})
      .subscribe(
        response => { console.log(response),window.alert('Fattura Modificata') },
        error => console.error('error: ' + JSON.stringify(error)),
        () => console.log('completed')
      )
  }

  //cancella Fattura
  deleteFattura(delfattura) {
    if (confirm("Vuoi davvero cancellare")) {
      console.log(delfattura)
      this.HttpFatture.delete(this.urlFatture + delfattura.id, {headers: this.header})
        .subscribe(
          response => { console.log(response),window.alert('Fattura Eliminata') },
          error => { console.error('error: ' + JSON.stringify(error)) },
          () => console.log('completed')
        )
    }
  }

//carica fatture clienti
  loadFattureCliente(idCliente, page) {
    this.HttpFatture.get(this.urlFatture + 'cliente/' + (idCliente) + '?page=' + (page - 1) + '&sort=id,ASC',{headers: this.header})
      .subscribe(
        response => { console.log(response), this.arrayFattureCliente = response },
        error => console.error('error: ' + JSON.stringify(error)),
        () => console.log('completed')
      )
  }
//carica singolo clienti
  loadSingleFattura(idFattura) {
    this.HttpFatture.get(this.urlFatture + idFattura, {headers: this.header})
      .subscribe(
        response => { console.log(response), this.editFattura = response },
        error => console.error('error: ' + JSON.stringify(error)),
        () => console.log('completed')
      )
  }
}
