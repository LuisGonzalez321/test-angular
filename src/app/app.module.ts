import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableEmployeeComponent } from './components/table-employee/table-employee.component';
import { TableDepartmentsComponent } from './components/table-deparments/table-departments.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    TableEmployeeComponent,
    TableDepartmentsComponent,
    TableEmployeeComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    TableEmployeeComponent,
    TableDepartmentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
