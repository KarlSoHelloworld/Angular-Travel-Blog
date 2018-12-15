import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../../assets/Class/Article';
import { ArticleServiceService } from '../article-service.service';
import { Comment } from '../../assets/Class/Article';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  article: Article;
  articles: Article[];
  newComment: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private articleService: ArticleServiceService,
  ) {

  }

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(id)
      .subscribe(article => this.article = article);
  }

  add(): void {
    console.log(this.newComment);

    if (this.newComment != '') {
      let hhh = new Comment();
      hhh.comment_user = 'Karl';
      hhh.time = 'Just Now';
      hhh.comment = this.newComment;
      hhh.userid = 5;
      this.article.comment.push(hhh);
    }
  }

}

