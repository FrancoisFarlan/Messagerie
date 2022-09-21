import {EventEmitter, Injectable} from '@angular/core';
import {Message} from "../models/message";

@Injectable({
  providedIn: 'root'
})
export class GestionMessagesService {

  private messages : Message[] = [];
  public emetteurMessages : EventEmitter<Message[]> = new EventEmitter<Message[]>();

  constructor() { }

  private notifier() {
    this.emetteurMessages.emit(this.messages.slice());
  }

  public  ajouter(m: Message) {
      this.messages.push(m);
      this.notifier();
  }
}
