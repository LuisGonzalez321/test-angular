import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {Observable} from "rxjs";
import {IDepartmentModel} from "../../models/department.model";
import {IEmployeeModel} from "../../models/employee.model";

@Component({
  selector: 'app-table-departments',
  templateUrl: './table-departments.component.html',
  styleUrls: ['./table-departments.component.scss']
})
export class TableDepartmentsComponent implements OnInit {

  public idDepartment: number = -1;
  public departments: Observable<IDepartmentModel[]> = this.employeeService.getDepartments();
  public employees: IEmployeeModel[] = [];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {

  }

  public getEmployeesByDepartment(idDepartment: number): void {
    this.employeeService.getEmployeesByIdDepartment(idDepartment).subscribe((employees: IEmployeeModel[]) => {
      this.employees = employees;
    });
  }

}
