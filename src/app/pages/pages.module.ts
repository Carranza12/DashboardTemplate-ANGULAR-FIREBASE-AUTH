import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ClientesComponent } from './clientes/clientes.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import{NgxPaginationModule} from 'ngx-pagination';
import { FilterEmpleadosPipe } from './pipes/filter-empleados.pipe'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    PagesComponent,
    ClientesComponent,
    EmpleadosComponent,
    FilterEmpleadosPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    
  ]
})
export class PagesModule { }
