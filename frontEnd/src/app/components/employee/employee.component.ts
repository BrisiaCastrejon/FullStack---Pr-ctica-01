import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
// se importa la clase NgForm para obtener los valores, pero desde el servicio se deben cachar (employee.service.ts)
import { NgForm } from "@angular/forms";
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  //se declara propiedad para guardar la data en el servicio*

  constructor(public employeeService : EmployeeService) { }

  ngOnInit(): void {
    //console.log(this.employeeService.getEmployees());
    // se invoca la data desde MongoDB
    /* se pasa la funcionalidad a otra funcion
    this.employeeService.getEmployees().subscribe(
      res => console.log(res),
      err => console.log(err)
    ) */
    this.getEmployees();
  };

  getEmployees (){
    this.employeeService.getEmployees().subscribe(
      res => {
        // La DATA se invoca desde el componente.html
        this.employeeService.employees = res;
      },
      err => console.log(err)
    )
  };

  resetForm (form: NgForm) {
    form.reset();
  };

  addEmployee(form: NgForm){
    if (form.value._id) {
      this.employeeService.putEmployee(form.value).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    } else {
      console.log(form.value)
      this.employeeService.createEmployee(form.value).subscribe(
      res => {
        console.log(res)
        this.getEmployees();
        form.reset();
      },
      err => console.log(err)
      )
    }
  };



  deleteEmployee(id:String){
    if (confirm('Are you sure you want to delete it')) {
      // para eliminar el employee es necesario crear el metodo deleteEmployee desde el servicio de Angular
      this.employeeService.deleteEmployee(id).subscribe(
        res => {
          this.getEmployees();
        },
        err => console.log(err)
      )
    }
  };

  editEmployee(employee: Employee){
    console.log(employee)
    // se rellenan los datos del formulario con la data actualizada
    this.employeeService.selectedEmployee = employee;
  };
}
