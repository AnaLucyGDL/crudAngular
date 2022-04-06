import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  formularioProductos: FormGroup;

  constructor(public formulario:FormBuilder, private CrudService:CrudService) { 

    this.formularioProductos=this.formulario.group({
      nombre:[''],
      precio:['']
    })

  }

  ngOnInit(): void {
  }

  enviarDatos():any {
    console.log("Prueba");
    console.log(this.formularioProductos.value);
    this.CrudService.agregarProducto(this.formularioProductos.value).subscribe();
  }

}
