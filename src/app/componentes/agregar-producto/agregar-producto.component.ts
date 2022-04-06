import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  formularioProductos: FormGroup;

  constructor(public formulario:FormBuilder) { 

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
  }

}
