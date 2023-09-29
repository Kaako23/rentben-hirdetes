import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MockHttpCallInterceptor } from 'src/mock/mock.interceptor';
import { AdvertisementPageComponent } from './pages/advertisement-page/advertisement-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdvertisementCardComponent } from './components/advertisement-card/advertisement-card.component';
import { AdvertisementAddComponent } from './pages/advertisement-add/advertisement-add.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    AdvertisementPageComponent,
    LoginPageComponent,
    AdvertisementCardComponent,
    AdvertisementAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MockHttpCallInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
