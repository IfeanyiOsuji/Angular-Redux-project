import { counterReducer } from "../counter/state/counter.reducer";
import { postReducer } from "../posts/state/posts.reducer";

export const appReducer = {
    counter:counterReducer,
    posts: postReducer
}