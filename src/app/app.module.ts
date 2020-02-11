import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ServerComponent } from './server/server.component';
import { PickupComponent } from './pickup/pickup.component';
import { FormsModule } from '@angular/forms';
import { AssignmentComponent } from './assignment/assignment.component';
import { NgxContentLoadingModule } from 'ngx-content-loading';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CoursesComponent,
    MyworkComponent,
    ServerComponent,
    PickupComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxContentLoadingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
