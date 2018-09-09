import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component';
import { DecisionEngineComponent } from './decision-engine/decision-engine.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    ReactiveApproachComponent,
    DecisionEngineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
