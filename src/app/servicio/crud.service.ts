import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string= 'http://localhost/productos'; //API de php Crud

  constructor(private clienteHttp:HttpClient) { }

  agregarProducto(datosProducto: producto):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosProducto);
  }

  obtenerProductos(){
    return this.clienteHttp.get(this.API);
  }

  borrarRegistro(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar"+id);
  }
}
