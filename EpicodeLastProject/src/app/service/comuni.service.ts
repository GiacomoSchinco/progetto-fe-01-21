import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  constructor(public HttpComuni: HttpClient) { }
  urlComuni='https://epicode.online/epicodebeserviceunauth/api/comuni?page=0&size=20&sort=id,ASC'
  arrayComuni:any
  reportComuni(){
    this.HttpComuni.get(this.urlComuni)
      .subscribe(response => {
        //console.log(response)
        this.arrayComuni = response
      },
      error => console.error('error: ' + JSON.stringify(error)),
      () => console.log('completed')
    );
  }
}
