import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IEmployeeModel} from "../../models/employee.model";
import {EmployeeService} from "../../services/employee.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

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

  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal
  ) { }

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

}
