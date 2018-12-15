import { Component, OnInit } from '@angular/core';
import {Articles} from '../../assets/Class/Articles';

@Component({
  selector: 'app-picturewall',
  templateUrl: './picturewall.component.html',
  styleUrls: ['./picturewall.component.css']
})
export class PicturewallComponent implements OnInit {

  articles=Articles;
  constructor() { }

  ngOnInit() {
  }

}
