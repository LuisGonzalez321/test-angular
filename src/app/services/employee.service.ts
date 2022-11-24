import {Injectable} from '@angular/core';
import {IEmployeeModel} from "../models/employee.model";
import {IDepartmentModel} from "../models/department.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public departments: IDepartmentModel[] = [
    {
      idDepartment: 1,
      name: 'IT',
      description: 'Information Technology',
    },
    {
      idDepartment: 2,
      name: 'HR',
      description: 'Human Resources'
    },
    {
      idDepartment: 3,
      name: 'Sales',
      description: 'Sales'
    },
    {
      idDepartment: 4,
      name: 'Marketing',
      description: 'Marketing'
    },
    {
      idDepartment: 5,
      name: 'Accounting',
      description: 'Accounting'
    },
    {
      idDepartment: 6,
      name: 'Legal',
      description: 'Legal'
    }
  ];

  public employees: IEmployeeModel[] = [{
    idEmployee: 1,
    idDepartment: 1,
    name: 'Juan',
    lastName: 'Perez',
    email: 'juan@gmail.com',
    phone: '123456789',
    address: 'Calle 123',
    age: 25,
    salary: 1000
  },
    {
      idEmployee: 2,
      idDepartment: 2,
      name: 'Juan 1',
      lastName: 'Perez',
      email: 'juan@gmail.com',
      phone: '123456789',
      address: 'Calle 123',
      age: 25,
      salary: 3000
    },
    {
      idEmployee: 3,
      idDepartment: 3,
      name: 'Juan 3434',
      lastName: 'Perez',
      email: 'juan@gmail.com',
      phone: '123456789',
      address: 'Calle 123',
      age: 25,
      salary: 1000
    },
    {
      idEmployee: 4,
      idDepartment: 6,
      name: 'Juan 343434',
      lastName: 'Perez',
      email: 'juan@gmail.com',
      phone: '123456789',
      address: 'Calle 123',
      age: 25,
      salary: 1000
    },
    {
      idEmployee: 5,
      idDepartment: 4,
      name: 'Juan 343L:L20',
      lastName: 'Perez',
      email: 'juan@gmail.com',
      phone: '123456789',
      address: 'Calle 123',
      age: 25,
      salary: 1000
    },
  ];

  constructor() { }

  public getEmployeesByIdDepartment(idDepartment: number): Observable<IEmployeeModel[]> {
    return new Observable<IEmployeeModel[]>(observer => {
      observer.next(this.employees.filter(employee => employee.idDepartment === idDepartment));
    });
  }

  public getDepartments(): Observable<IDepartmentModel[]> {
    return new Observable<IDepartmentModel[]>(observer => {
      observer.next(this.departments);
    });
  }

  public getEmployeeById(id: number): Observable<IEmployeeModel> {
    return new Observable<IEmployeeModel>(observer => {
      observer.next(this.employees.find(employee => employee.idEmployee === id));
    });
  }


}
