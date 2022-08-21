import { Post } from './../../models/posts.model';
import { createAction, props } from '@ngrx/store';

export const addPostPage = createAction('addpostpage', props<{post:Post}>());