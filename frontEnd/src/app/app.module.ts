import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// se importa HttpClientModule para conexión con API
import { HttpClientModule  } from "@angular/common/http";
// se importa FormsModule para envio de data
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
