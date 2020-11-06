/**
 * Root reducer use to combine seperate reducers in to one reducer for Redux to consume to make the main store
 */

import { combineReducers } from "redux";
import {language, languages} from './languages';
import {resources, resource} from './resources';
import {externalApi} from './api';
import {comments} from './comments'


export default combineReducers({
  externalApi,
  language,
  languages,
  resources,
  resource, 
  comments
});