import { Store } from '@ngrx/store';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addPostPage } from '../state/posts.action';
import { Observable } from 'rxjs';
import { getPosts } from '../state/posts.selector';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm! :FormGroup

  posts$! : Observable<Post[]>

  constructor(private store:Store<AppState>) { }
   

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
    console.log('post listed ' +this.getPosts());
  }
  onSubmit(){
    if(this.postForm.valid){return;}
    console.log(this.postForm.value)
  }
 
  showTitleErrors(){
    const titleError = this.postForm.controls['title'];
    if(titleError.touched && !titleError.valid){
      if(titleError.errors?.['required']){ return 'title is required'}
      if(titleError.errors?.['minlength']){ return 'title rquires a minimum length of 6'}
    }
     return '';
    
  }
  showDescriptionErrors(){
    const descriptionError = this.postForm.controls['description'];
    if(descriptionError.touched && !descriptionError.valid){
      if(descriptionError.errors?.['required']){ return 'description is required'}
      if(descriptionError.errors?.['minlength']){ return 'description rquires a minimum length of 10'}
    }
     return '';
    
  }
  getPosts(){
    this.posts$ = this.store.select(getPosts)
    return this.posts$;
  }

  onAddPost(){
    if(!this.postForm.valid){
      return;
    }
    //console.log(' All post listed ' +this.getPosts());
    let postId = 1
    this.getPosts().forEach((post) =>{
      post.forEach((post) =>{ 
        postId =postId+1
        console.log('post: ', post, 'postId: ',postId)
      })
    })

    const post :Post = {
      id : postId.toString(),
      title : this.postForm.value.title,
      description : this.postForm.value.description
    }
    this.store.dispatch(addPostPage({post}))

  }

}
