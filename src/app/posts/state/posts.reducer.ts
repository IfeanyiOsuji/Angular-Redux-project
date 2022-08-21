import { addPostPage } from './posts.action';
import { on } from '@ngrx/store';


import { createReducer } from '@ngrx/store';
import { initialState } from './posts.state';
import { state } from '@angular/animations';

const _postReducer = createReducer(initialState, on(addPostPage, (state, action)=>{
    let post = {...action.post};
   // post.id = (state.posts.length+1).toString()
    return {
     
        ...state,
        posts: [...state.posts, post]

    }
}))

export function postReducer(state:any, action:any){
    return _postReducer(state, action)

}