import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department-service.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.sass']
})
export class DepartmentListComponent implements OnInit {
  public Departments = [];
  public message;
  constructor(private deptservice: DepartmentService) { }

  ngOnInit() {
    return this.deptservice.getDepartments()
    .subscribe(data => this.Departments =data, error => this.message = error);
  }

}
