import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarlComponent } from './login/navbarl/navbarl.component';
import { FooterlComponent } from './login/footerl/footerl.component';
import { FootersComponent } from './signup/footers/footers.component';
import { NavbarsComponent } from './signup/navbars/navbars.component';
import { CustomerComponent } from './customer/customer.component';
import { HotelComponent } from './hotel/hotel.component';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarlComponent,
    FooterlComponent,
    FootersComponent,
    NavbarsComponent,
    CustomerComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
