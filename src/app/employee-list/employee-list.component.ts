import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent implements OnInit {
  public Employees = [];
  public errorMsg;
  constructor(private empservice: EmployeeService) { }

  ngOnInit() {
    return this.empservice.getEmployees().
      subscribe(data => this.Employees = data, error => this.errorMsg = error);
  }
  
}
