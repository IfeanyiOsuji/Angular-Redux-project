import { AddPostComponent } from './../posts/add-post/add-post.component';
import { CounterComponent } from './../counter/counter/counter.component';
import { HomeComponent } from './../home/home.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { PostListComponent } from '../posts/post-list/post-list.component';


const routes :Routes = [
  {
    path : '', component:HomeComponent,
  },
  {
    path:'counter', component:CounterComponent,
  },
  {
    path:'posts', 
    component:PostListComponent,
    children :[
      {path: 'add', component:AddPostComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
