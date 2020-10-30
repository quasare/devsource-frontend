import { LOAD_LANGUAGE, LOAD_LANGUAGES } from "../Actions/types";

const INITIAL_STATE = {};



function language(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_LANGUAGE:
      return {
        ...state, ...action.payload 
      };

    default:
      return state;
  }
}


function languages(state = INITIAL_STATE, action) {
  switch (action.type) {
    
    case LOAD_LANGUAGES:
      return {
        ...state, ...action.payload
      };  

    default:
      return state;
  }
}

export {language, languages};


