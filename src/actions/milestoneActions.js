import {types} from './actionTypes';

export const edit = (milestoneId) => ({ type: types.EDIT, milestoneId })

export const post = (milestoneId) => ({ type: types.POST, milestoneId })

export const deleteMilestone = (milestoneId) => ({type: types.DELETE, milestoneId})

export const addPreviewImg = (milestoneId, image) => 
  ({ type: types.ADD_PREVIEW_IMG, milestoneId, image })

export const addImg = (milestoneId, image) => ({ type: types.ADD_IMG, milestoneId, image })

export const delImg = (milestoneId, imgId) => ({ type: types.DEL_IMG, milestoneId, imgId })

export const chooseLayout = (milestoneId, layoutId) => ({ 
  type: types.CHOOSE_LAYOUT, milestoneId, layoutId 
})
export const searchPlace = (milestoneId, term) => ({ type: types.SEARCH_PLACE, milestoneId, term })

export const changeMilestoneTime = (milestoneId, time) => ({ 
  type: types.CHANGE_MILESTONE_TIME, milestoneId, time
})
export const changeMilestoneTitle = (milestoneId, title) =>({
  type: types.CHANGE_MILESTONE_TITLE, milestoneId, title
})
export const changeMilestoneContent = (milestoneId, content) =>
  ({ type: types.CHANGE_MILESTONE_CONTENT, milestoneId, content})
export const changeMilestoneTip = (milestoneId, tip) => ({
  type: types.CHANGE_MILESTONE_TIP, milestoneId, tip
})
export const changeMilestonePlaceInfo = (milestoneId, placeInfo) => ({
  type: types.CHANGE_MILESTONE_PLACE_INFO, milestoneId, placeInfo
})