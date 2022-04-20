import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AuthGuard } from '../guards/auth.guard';

const routes:Routes=[
  {path:'dashboard', component:PagesComponent, canActivate: [AuthGuard],
  children:[
    {path:'', component:DashboardComponent, data:{titulo:'Dashboard'}}, 
    {path:'usuarios', component:UsuariosComponent,data:{titulo:'Usuarios'}},
<<<<<<< HEAD
    {path:'productos', component:ProductosComponent, data:{titulo:'Productos'}},
    {path:'clientes', component:ClientesComponent, data:{titulo:'Clientes'}}
=======
    {path:'productos', component:ProductosComponent, data:{titulo:'Productos'}}
>>>>>>> 66a5c2a3eec430193dfd04dc24d553df249108c3
  ]
}
]


@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
