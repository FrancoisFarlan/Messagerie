import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { PersonnesActivesComponent } from './personnes-actives/personnes-actives.component';
import { MessagesComponent } from './messages/messages.component';
import { NouveauMessageComponent } from './nouveau-message/nouveau-message.component';

@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    PersonnesActivesComponent,
    MessagesComponent,
    NouveauMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
