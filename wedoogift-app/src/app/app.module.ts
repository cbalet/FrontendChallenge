import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ForbiddenComponent} from "./component/forbidden/forbidden.component";
import {HeaderComponent} from "./component/header/header.component";
import {FooterComponent} from "./component/footer/footer.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {CalculatorService} from "./service/calculator.service";
import {AppRoutingModule} from "./app-routing.module";
import {ChallengeComponent} from "./site/challenge/challenge.component";

@NgModule({
  declarations: [
    AppComponent,
    ForbiddenComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    HttpClientModule,
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
