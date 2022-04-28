import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit, OnDestroy{
  empleadosData$:any;
  $empleados:any;
  totalRecords:string="5";
  page:number=1;
  filterEmpleado='';
  busqueda:any;
  constructor(private empleadosServices:EmpleadosService, private builder:FormBuilder) { 
    

  }
 
  ngOnInit(): void {
    this.busqueda= this.builder.group({
      nombre: ['', Validators.required],
    })
    if(this.$empleados==null){
      this.empleadosData$ =this.empleadosServices.obtenerEmpleados();
      this.empleadosData$.subscribe((em:any)=>{
         this.$empleados=em.results;
          this.totalRecords=em.results.length;

       });
       
    }
  
  }

  ngOnDestroy(): void {
   this.empleadosData$.unsubscribe();
  }
  submit() {
    console.log(this.busqueda.value.nombre)
  }
  
}
