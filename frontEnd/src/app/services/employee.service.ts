// conexion para la API que se hizo con Express y Mongo

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API = 'http://localhost:4000/api/employees';
   //se genera una propiedad para cachar la info del formulario y en el formulario se el ngModel
   selectedEmployee: Employee = {
     name: '',
     position: '',
     office: '',
     salary:0,
     _id:''
   }

  // propiedad que almacenará la data desde el GET de la API => se le pasará la interface que se encuentra en /models/employee.ts
  //con la nueva versión de TypeScript se debe poner el tipo de dato
  employees: Employee[] = [];


  constructor(private http : HttpClient) {   }

  getEmployees () {
    //return this.http.get(this.URL_API);
    // se agrega la especificación de la DATA que se va a recibir o de lo contrario manda error en el employe.component.ts y se agregan los [] o sigue dando el mismo error
    return this.http.get<Employee[]>(this.URL_API);
  };

  createEmployee(employee: Employee){
    return this.http.post(this.URL_API, employee)
  };

  putEmployee (employee : Employee){
    return this.http.put(`${this.URL_API}/${employee._id}`, employee);
  }

  deleteEmployee (_id: String){
    // el _id de tipo String viene de MongoDb
    return this.http.delete(`${this.URL_API}/${_id}`);

  }
}
