import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {GestionMessagesService} from "../services/gestion-messages.service";
import {Message} from "../models/message";


@Component({
  selector: 'app-nouveau-message',
  templateUrl: './nouveau-message.component.html',
  styleUrls: ['./nouveau-message.component.css']
})
export class NouveauMessageComponent implements OnInit {

  @Input()
  auteur: string ='';
  @Input()
  texteMessage: string ='';

  constructor(private gestionMessages: GestionMessagesService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if(!this.validateNom(form) && !this.validateTexte(form)) {
      this.gestionMessages.ajouter(new Message(this.auteur, this.texteMessage));
      form.controls['texteMessage'].reset();
    }
  }

  validateNom(form : NgForm) {
    return (form.controls['auteur'].invalid || this.auteur.trim().length < 5) && (form.controls['auteur'].dirty);
  }

  validateTexte(form : NgForm) {
    return (form.controls['texteMessage'].invalid || this.texteMessage.trim().length < 1) && (form.controls['texteMessage'].dirty);
  }
}



