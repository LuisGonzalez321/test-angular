import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IEmployeeModel} from "../../models/employee.model";
import {EmployeeService} from "../../services/employee.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-table-employee',
  templateUrl: './table-employee.component.html',
  styleUrls: ['./table-employee.component.scss']
})
export class TableEmployeeComponent implements OnInit, OnChanges {

  @Input() public idDepartment: number = -1;
  @Input() public employees: IEmployeeModel[] = [];
  @Input() public employee: IEmployeeModel = {
    idEmployee: 0,
    idDepartment: 0,
    name: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    age: 0,
    salary: 0
  };

  public formGroup: FormGroup | any;

  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal,
    private _formBuilder: FormBuilder
  ) {
    this.formGroup = this._formBuilder.group({
      name: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      age: new FormControl(0),
      salary: new FormControl(0)
    });
  }

  public ngOnInit(): void {
  }


  public ngOnChanges(): void {
  }

  public closeResult = '';


  public open(content: any, idEmployee: number): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );

    this.employeeService.getEmployeeById(idEmployee).subscribe((employee: IEmployeeModel) => {
      this.employee = employee;
      // add data to form
      this.formGroup.controls.name.setValue(this.employee.name);
      this.formGroup.controls.lastName.setValue(this.employee.lastName);
      this.formGroup.controls.email.setValue(this.employee.email);
      this.formGroup.controls.phone.setValue(this.employee.phone);
      this.formGroup.controls.address.setValue(this.employee.address);
      this.formGroup.controls.age.setValue(this.employee.age);
      this.formGroup.controls.salary.setValue(this.employee.salary);
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public updateEmployee(): void {
    this.employee.name = this.formGroup.controls.name.value;
    this.employee.lastName = this.formGroup.controls.lastName.value;
    this.employee.email = this.formGroup.controls.email.value;
    this.employee.phone = this.formGroup.controls.phone.value;
    this.employee.address = this.formGroup.controls.address.value;
    this.employee.age = this.formGroup.controls.age.value;
    this.employee.salary = this.formGroup.controls.salary.value;

    this.employeeService.putEmployee(this.employee).subscribe((employee: IEmployeeModel) => {
      this.employee = employee;
      this.modalService.dismissAll();
    });
  }


}
