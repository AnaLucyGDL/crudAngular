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
  formularioProductos: FormGroup;
  elID:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder
  ) { 
    this.elID = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.crudService.obtenerProducto(this.elID).subscribe(respuesta =>{
      console.log(respuesta);
      this.formularioProductos.setValue({
        nombre: respuesta[0]['nombre'],
        precio: respuesta[0]['precio']
      })
    });

    this.formularioProductos=this.formulario.group({
      nombre:[''],
      precio:['']
    });
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioProductos.value);
  }
}
