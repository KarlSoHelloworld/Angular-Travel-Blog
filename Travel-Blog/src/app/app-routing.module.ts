import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ArticlepageComponent} from './articlepage/articlepage.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ArticleDetailsComponent} from './article-details/article-details.component'

import { from } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'articles', component: ArticlepageComponent }, 
  { path: 'detail/:id', component: ArticleDetailsComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
