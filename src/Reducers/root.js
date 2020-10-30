/**
 * Root reducer use to combine seperate reducers in to one reducer for Redux to consume to make the main store
 */

import { combineReducers } from "redux";
import {language, languages} from './languages'


export default combineReducers({
  language,
  languages
});