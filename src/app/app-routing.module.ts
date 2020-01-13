import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { MyworkComponent } from './mywork/mywork.component';
import { PickupComponent } from './pickup/pickup.component';
import { AssignmentComponent } from './assignment/assignment.component';


const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'work', component: MyworkComponent},
  {path: 'pickup', component: PickupComponent},
  {path: 'assignment', component: AssignmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
