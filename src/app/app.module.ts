import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { LandingComponent } from './landing/landing.component';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { CoTokenDashComponent } from './co-token-dash/co-token-dash.component';
import { CashTokenDashComponent } from './cash-token-dash/cash-token-dash.component';



@NgModule({
  declarations: [
    AppComponent,

    LandingComponent,

    NavbarComponent,
    FooterComponent,
    CoTokenDashComponent,
    CashTokenDashComponent,
 
  
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
