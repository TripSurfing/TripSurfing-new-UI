import {
  types
} from '../actions/actionTypes';

const tripInfo = (state = [], action) => {
  let tripInfo = JSON.parse(JSON.stringify(state));
  let len = tripInfo.length;

  switch (action.type) {
    case 'CHANGE_TRIP_TITLE':
      for (let i = 0; i < len; i++) {
        if (tripInfo[i].tripId === action.tripId) tripInfo[i].title = action.title;
      }
      return tripInfo;
    case 'CHANGE_TRIP_COST':
      for (let i = 0; i < len; i++) {
        if (tripInfo[i].tripId === action.tripId) tripInfo[i].cost = action.cost;
      }
      return tripInfo;
    case 'CHANGE_TRIP_STARTDATE':
      for (let i = 0; i < len; i++) {
        if (tripInfo[i].tripId === action.tripId) tripInfo[i].startDate = action.startDate;
      }
      return tripInfo;
    case 'CHANGE_TRIP_PUBLIC':
      for (let i = 0; i < len; i++) {
        if (tripInfo[i].tripId === action.tripId) tripInfo[i].public = !tripInfo[i].public;
      }
      return tripInfo;
    default:
      return tripInfo;
  }
}
export default tripInfo;