import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeeService} from './employee-service.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HttpClientModule} from '@angular/common/http';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EmployeeDetailsComponent,
    DepartmentListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
