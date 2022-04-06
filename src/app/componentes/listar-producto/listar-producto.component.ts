import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  Productos: any;


  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.obtenerProductos().subscribe(respuesta => {
      console.log(respuesta);
      this.Productos=respuesta;
    });
  }

  borrarRegistro(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    if (window.confirm("¿Desea borrar este registro?"))
    this.crudService.borrarRegistro(id).subscribe(respuesta => {
      this.Productos.splice(iControl,1);
    });
  }

}
