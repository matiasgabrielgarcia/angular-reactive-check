import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { IPost } from '../model/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'posts',
  templateUrl: 'posts.component.html',
})
export class PostsComponent implements OnInit{

  private posts$: Observable<IPost[]>

  constructor(private apiService: ApiService ){}

  ngOnInit(): void {
    this.posts$ = this.apiService.getPosts();
  }

}
