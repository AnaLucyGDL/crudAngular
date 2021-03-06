import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'agregar-producto' },
  { path: 'agregar-producto', component: AgregarProductoComponent },
  { path: 'listar-producto', component: ListarProductoComponent },
  { path: 'editar-producto/:id', component: EditarProductoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
