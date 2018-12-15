import { Component, OnInit } from '@angular/core';
import {Articles} from '../../assets/Class/Articles';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit {
  
  articles=Articles;
 
  constructor() { }

  ngOnInit() {
  }

}
