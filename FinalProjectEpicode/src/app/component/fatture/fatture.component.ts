import { Component, OnInit } from '@angular/core';
import { FattureService } from 'src/app/service/fatture.service';


@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {
  constructor(public FattureService:FattureService) { }
  page=1;
  pageSize=10
  reloadFatture(){
    this.FattureService.loadFatture(this.page)
  }

  ngOnInit(): void {
    this.FattureService.loadFatture(1)
  }

}
