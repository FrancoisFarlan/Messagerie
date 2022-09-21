import {Component, Input, OnInit} from '@angular/core';
import {Personne} from "../models/personne";


@Component({
  selector: 'app-personnes-actives',
  templateUrl: './personnes-actives.component.html',
  styleUrls: ['./personnes-actives.component.css']
})
export class PersonnesActivesComponent implements OnInit {

  @Input()
  tableauPersonnes : Personne[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}


