import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { PicturewallComponent } from './picturewall/picturewall.component';
import { ArticlepageComponent } from './articlepage/articlepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsComponent } from './news/news.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainbodyComponent,
    PicturewallComponent,
    ArticlepageComponent,
    HomepageComponent,
    NewsComponent,
    ArticleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
