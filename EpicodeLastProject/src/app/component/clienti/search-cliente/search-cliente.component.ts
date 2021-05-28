import { Component, OnInit } from '@angular/core';
import { ClientiService } from 'src/app/service/clienti.service';
import { ComuniService } from 'src/app/service/comuni.service';

@Component({
  selector: 'app-search-cliente',
  templateUrl: './search-cliente.component.html',
  styleUrls: ['./search-cliente.component.css']
})
export class SearchClienteComponent implements OnInit {

  constructor(public ClientiService:ClientiService, public ComuniService:ComuniService) { }
  page=1
  pageSize=10

  ngOnInit(): void {
  }

}
