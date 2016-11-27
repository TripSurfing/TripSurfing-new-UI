import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import milestoneList from './milestoneListReducer';
import tripInfo from './tripInfoReducer';
// import header from './header_reducer';

const rootReducer = combineReducers( {
  milestoneList, routing: routerReducer, tripInfo
})
export default rootReducer;