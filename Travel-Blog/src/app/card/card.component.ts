import { Component, OnInit } from '@angular/core';
import {Articles} from '../../assets/Class/Articles';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  articles=Articles;
 
  constructor() { }

  ngOnInit() {
  }

}
