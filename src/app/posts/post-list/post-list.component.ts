import { Post } from './../../models/posts.model';
import { Observable } from 'rxjs';
import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { PostState } from '../state/posts.state';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts$! : Observable<Post[]>

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts)

  }

}
