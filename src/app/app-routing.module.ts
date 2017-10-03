import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/post.component';
import { PostsComponent } from './components/posts.component';
import { ApiService } from './services/api.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'posts', pathMatch: 'full'
  },
  {
    path: 'posts', component: PostsComponent
  },
  {
    path: 'post/:id', component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
  providers: [ApiService]
})
export class AppRoutingModule { }
