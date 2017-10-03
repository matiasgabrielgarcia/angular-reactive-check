import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service'
import { IPost } from '../model/post';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'post',
  templateUrl: 'post.component.html',
})
export class PostComponent implements OnInit, OnDestroy{

  private routeSusc: Subscription;
  private postId: number;
  private post$: Observable<IPost>;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private location: Location){}

  ngOnInit(): void{
    this.routeSusc = this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.post$ = this.apiService.getPostWithComments(this.postId);
    });
  }

  back(): void{
    this.location.back();
  }

  ngOnDestroy(): void{
    this.routeSusc.unsubscribe();
  }

}
