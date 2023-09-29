import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { AdvertisementPageComponent } from './advertisement-page/advertisement-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
    { path: 'registration', component: RegistrationPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: '**', component: AdvertisementPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
