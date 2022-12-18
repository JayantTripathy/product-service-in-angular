import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CricketerListComponent } from './componenets/cricketer-list/cricketer-list.component';
import { FilteredListComponent } from './componenets/filtered-list/filtered-list.component';
import { ParentComponent } from './componenets/parent/parent.component';
import { ChildComponent } from './componenets/child/child.component';
import { EmployeeComponent } from './componenets/employee/employee.component';
import { HighlightDirective } from './directives/custom.directive';
import { HttpClientModule } from '@angular/common/http';
import { MyCustomPipePipe } from './pipe/my-custom-pipe.pipe';
import { AboutUsComponent } from './componenets/about-us/about-us.component';
import { ContactUsComponent } from './componenets/contact-us/contact-us.component';
import { HomeComponent } from './componenets/home/home.component';
import { NotFoundComponent } from './componenets/not-found/not-found.component';
import { LoginComponent } from './componenets/login/login.component';
import { ProductComponent } from './componenets/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CricketerListComponent,
    FilteredListComponent,
    ParentComponent,
    ChildComponent,
    HighlightDirective,
    MyCustomPipePipe,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
