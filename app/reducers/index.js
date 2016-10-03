import { combineReducers } from 'redux';
// import fetchDummyData from '../actions/dummydata';
import authendicationReducer from './authendication';


const rootReducer = combineReducers({
  authendicated: authendicationReducer
});

export default rootReducer;
