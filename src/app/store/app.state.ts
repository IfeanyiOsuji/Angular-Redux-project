import { PostState } from '../posts/state/posts.state';
import { CounterState } from './../counter/state/counter.state';
export interface AppState{
    counter:CounterState;
    posts:PostState
}