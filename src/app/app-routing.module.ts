import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { EmployeeListComponent} from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: ' ', redirectTo:'/departments', pathMatch:'full'},
  { path: 'employee-list', component: EmployeeListComponent},
  { path : 'department-list', component: DepartmentListComponent },
  { path : '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent, DepartmentListComponent, PageNotFoundComponent]