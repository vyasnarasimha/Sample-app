import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.sass']
})
export class EmployeeDetailsComponent implements OnInit {
  public Employees = [];
  public errorMsg;
  constructor(private empservice : EmployeeService) { }

  ngOnInit() {
    return this.empservice.getEmployees().
        subscribe(data => this.Employees = data, error => this.errorMsg = error);
  }

}
