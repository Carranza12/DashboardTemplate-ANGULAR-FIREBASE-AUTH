import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmpleados'
})
export class FilterEmpleadosPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const resultName=[];
 
     value.forEach((name:any) => {
       console.log(name.name);
     });
  }

}
