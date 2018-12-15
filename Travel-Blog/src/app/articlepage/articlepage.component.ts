import { Component, OnInit } from '@angular/core';
import { Articles } from '../../assets/Class/Articles';


@Component({
  selector: 'app-articlepage',
  templateUrl: './articlepage.component.html',
  styleUrls: ['./articlepage.component.css']
})
export class ArticlepageComponent implements OnInit {

  articles;
  constructor() {
  }

  ngOnInit() {
    this.readpage(1);
  }

  readpage(page: number): void {
    
    let uper: number = page * 6;
    let lower: number = page * 6-6;
    if(uper>Articles.length)
    {
      uper=Articles.length;      
    }
    
    this.articles = Articles.slice(lower, uper);
  }


}
