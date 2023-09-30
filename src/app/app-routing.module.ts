import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdvertisementPageComponent } from './pages/advertisement-page/advertisement-page.component';
import { AdvertisementAddComponent } from './pages/advertisement-add/advertisement-add.component';

const routes: Routes = [
    { path: '', redirectTo: 'advertisement', pathMatch: 'full' },
    { path: 'registration', component: RegistrationPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'add-advertisement', component: AdvertisementAddComponent },
    { path: '**', component: AdvertisementPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
