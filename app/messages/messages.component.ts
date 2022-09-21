import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../models/message";
import {GestionMessagesService} from "../services/gestion-messages.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[];

  constructor(private gestionMessages: GestionMessagesService) {
    this.messages = [];
  }

  ngOnInit(): void {
    this.gestionMessages.emetteurMessages.subscribe((value) => this.messages = value);
  }

  ngOnDestroy(): void {
    this.gestionMessages.emetteurMessages.unsubscribe();
  }

}
