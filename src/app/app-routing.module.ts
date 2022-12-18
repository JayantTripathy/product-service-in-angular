import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './componenets/about-us/about-us.component';
import { ContactUsComponent } from './componenets/contact-us/contact-us.component';
import { CricketerListComponent } from './componenets/cricketer-list/cricketer-list.component';
import { EmployeeComponent } from './componenets/employee/employee.component';
import { HomeComponent } from './componenets/home/home.component';
import { LoginComponent } from './componenets/login/login.component';
import { NotFoundComponent } from './componenets/not-found/not-found.component';
import { ProductComponent } from './componenets/product/product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path:'employess', component: EmployeeComponent},
  { path:'cricketers', component: CricketerListComponent},
  { path:'about-us', component: AboutUsComponent},
  { path:'contact-us', component: ContactUsComponent},
  { path:'login', component: LoginComponent},
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
