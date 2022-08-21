import { Post } from '../../models/posts.model';

export interface PostState{
    posts: Post[]
}
 
export const initialState = {
    posts:[
        {id:'1', title:'sample title 1', description:'Sample description 1'},
        {id:'2', title:'sample title 2', description:'Sample description 2'},
        {id:'3', title:'sample title 3', description:'Sample description 3'}
    ]

};