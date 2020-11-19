import { LOAD_COMMENT, POST_COMMENT, REMOVE_COMMENT } from "../Actions/types";

const INITIAL_STATE = {};

function comments(state = INITIAL_STATE, action) {
    let c = state['comments']
   
    switch (action.type) {
      case LOAD_COMMENT:
        return {
          ...state, ...action.payload 
        };
      case POST_COMMENT:  
        
        return{
          ...state, comments: [...c, action.comment.comment]
        }
      case REMOVE_COMMENT:
        return{
          ...state, comments: [...c.filter(i => i.id !== action.commentId)]
        }  
      default:
        return state;
    }
  }

  export {comments}