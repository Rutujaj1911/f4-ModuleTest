import { combineReducers } from "redux";
import postsReducer from "./postsReducer.js";
import detailsReducer from "./detailsReducer.js";



const rootReducer = combineReducers({
    posts: postsReducer,
    detailsCard: detailsReducer
})

export default rootReducer;


     
