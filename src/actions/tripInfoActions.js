import {types} from './actionTypes';

export const changeTripTitle = (tripId, title) => ({
  type: types.CHANGE_TRIP_TITLE, tripId, title
})
export const changeTripCost = (tripId, cost) => ({
  type: types.CHANGE_TRIP_COST, tripId, cost
})
export const changeTripCity = (tripId, city) => ({
  type: types.CHANGE_TRIP_CITY, tripId, city
})
export const changeTripStartDate = (tripId, date) => ({
  type: types.CHANGE_TRIP_STARTDATE, tripId, date
})
