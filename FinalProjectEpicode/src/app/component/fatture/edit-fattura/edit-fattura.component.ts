import { Component, OnInit } from '@angular/core';
import { FattureService } from 'src/app/service/fatture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-fattura',
  templateUrl: './edit-fattura.component.html',
  styleUrls: ['./edit-fattura.component.css']
})
export class EditFatturaComponent implements OnInit {
  constructor(private myActRoute: ActivatedRoute, public FattureService:FattureService) { }
  fatturaId: any;
  editFattura:any

  modifyFattura(){
    this.FattureService.modifyFattura(this.FattureService.editFattura)
  }
  ngOnInit(): void {
    this.myActRoute.paramMap
      .subscribe(
        myParams => {
          this.fatturaId = myParams.get('id');
          console.log(this.fatturaId)
        },
      )
      this.FattureService.loadSingleFattura(this.fatturaId)
  }
}
