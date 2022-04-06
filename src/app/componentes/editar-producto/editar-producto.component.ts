import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  elID:any;

  constructor(
    private activeRoute:ActivatedRoute
  ) { 
    this.elID = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID)
  }

  ngOnInit(): void {
  }

}
