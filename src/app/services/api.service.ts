import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from 'rxjs';
import 'rxjs';
import { IPost } from '../model/post';
import { IComment } from '../model/comment';

const BASE_URL: string = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient){}

  getPosts(): Rx.Observable<IPost[]> {
    return this.http.get<IPost[]>(`${BASE_URL}/posts`)
  }

  getComment(postId: number): Rx.Observable<IComment[]> {
    return this.http.get<IComment[]>(`${BASE_URL}/comments?postId=${postId}`)
  }

  getPostWithComments(postId: number): Rx.Observable<IPost> {
    return this.getPost(postId)
    .combineLatest(this.getComment(postId),
      (post, comments) => { return { ...post, comments }})
  }

  private getPost(postId: number): Rx.Observable<IPost>{
    return this.http.get<IPost>(`${BASE_URL}/posts/${postId}`)
  }

}
