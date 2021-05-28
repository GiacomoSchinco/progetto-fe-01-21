import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {
  constructor(public HttpClienti: HttpClient) { }
  urlClienti = 'https://epicode.online/epicodebeservice/api/clienti/'
  urloriginaleTest = 'https://epicode.online/epicodebeserviceunauth/api/clienti'
  arrayClienti: any;
  editCliente: any;
  resultSearchClienti = []
  arraySearchCliente: any;
  inputCliente: any;

  token= localStorage.getItem('Token')
  header = new HttpHeaders().set('Authorization', this.token.slice(1,-1));



  loadClienti(page) {
    this.HttpClienti.get(this.urlClienti + '?page=' + (page - 1) + '&sort=id,ASC',{headers: this.header})
      .subscribe(
        response => { this.arrayClienti = response },
        error => console.error('error: ' + JSON.stringify(error)),
        () => console.log('completed')
      )
  }


  searchCliente() {
    this.resultSearchClienti = []
    this.HttpClienti.get(this.urlClienti + '?page=0&size=500',{headers: this.header})
      .subscribe(
        response => {this.arraySearchCliente = response, this.filter(this.arraySearchCliente.content, this.inputCliente)},
        error => console.error('error: ' + JSON.stringify(error)),
        () => console.log('completed')
      )
  }
  filter(array, search) {
    array.forEach(cliente => {
      if (cliente.ragioneSociale != null) {
        if (cliente.ragioneSociale.toUpperCase().indexOf(search.toUpperCase()) > -1) {
          this.resultSearchClienti.push(cliente)
        }
      }
    });
  }
  

  deleteCliente(delcliente) {
    console.log(delcliente)
    if (confirm("Vuoi davvero cancellare")) {
      this.HttpClienti.delete(this.urlClienti + delcliente.id, {headers: this.header})
        .subscribe(
          response => { console.log(JSON.stringify(response)),window.alert('Cliente Eliminato') },
          error => { console.error('error: ' + JSON.stringify(error)) },
          () => console.log('completed')
        )
    }
  }
  modifyCliente(cliente) {
    this.HttpClienti.put(this.urlClienti + cliente.id, cliente, {headers: this.header})
      .subscribe(
        response => { console.log(JSON.stringify(response)),window.alert('Cliente Modificato') },
        error => console.error('error: ' + JSON.stringify(error)),
        () => console.log('completed')
      )
  }
  addCliente(newCliente) {
    this.HttpClienti.post(this.urlClienti, newCliente, {headers: this.header})
      .subscribe(
        response => { console.log(JSON.stringify(response)),window.alert('Nuovo cliente Salvato') },
        error => console.error('error: ' + JSON.stringify(error)),
        () => console.log('completed')
      )
  }
  loadSingleCliente(idClienti) {
    this.HttpClienti.get(this.urlClienti + idClienti,  {headers: this.header})
      .subscribe(
        response => { console.log(response), this.editCliente = response },
        error => console.error('error: ' + JSON.stringify(error)),
        () => console.log('completed')
      )
  }
}
