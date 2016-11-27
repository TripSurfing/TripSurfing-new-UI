import { types } from '../actions/actionTypes';
import intialMilestone1 from '../data/milestoneList';
import $ from 'jquery';

const milestoneList = (state = [], action) => {
  let milestoneList = JSON.parse(JSON.stringify(state));
  let intialMilestone = intialMilestone1[0];
  switch (action.type) {
    case types.EDIT:
      milestoneList[action.milestoneId].layout = 0;
      milestoneList[action.milestoneId].status = "update";
      return milestoneList;

    case types.DELETE:
      milestoneList.splice(action.milestoneId, 1);
      return milestoneList;
    case types.POST:
      let currentMilestone = milestoneList[action.milestoneId];
      if (currentMilestone.status === null) {
        milestoneList.push(intialMilestone);
      }
      if (currentMilestone.tempLayout === 0 || currentMilestone.images.length === 0) {
        currentMilestone.layout = currentMilestone.tempLayout = 1;
      } else currentMilestone.layout = currentMilestone.tempLayout;

      currentMilestone.id = action.milestoneId;
      currentMilestone.status = "post";
      return milestoneList;

    case types.ADD_IMG:
      let images = milestoneList[action.milestoneId].images;
      images.push(action.image);
      // let len = images.length;
      // for (let i = 0; i < len; i++) {
      //   if (images[i].tempImgId === action.image.tempImgId) {
      //     images[i] = action.image;
      //   }
      // }
      return milestoneList;

    case types.ADD_PREVIEW_IMG:
      milestoneList[action.milestoneId].images.push(action.image);
      return milestoneList;

    case types.DEL_IMG:
      $.ajax({
        type: "delete",
        url: milestoneList[action.milestoneId].images[action.imgId].deleteUrl,
        dataType: "json"
      });
      milestoneList[action.milestoneId].images.splice(action.imgId, 1);
      return milestoneList;

    case types.CHOOSE_LAYOUT:
      milestoneList[action.milestoneId].tempLayout = action.layoutId;
      return milestoneList;

    case types.CHANGE_MILESTONE_TITLE:
      milestoneList[action.milestoneId].title = action.title;
      return milestoneList;
    
    case types.CHANGE_MILESTONE_TIME:
      milestoneList[action.milestoneId].time = action.time;
      return milestoneList;
    
    case types.CHANGE_MILESTONE_CONTENT:
      milestoneList[action.milestoneId].content = action.content;
      console.log(action.content);
      return milestoneList;
    
    case types.CHANGE_MILESTONE_TIP:
      milestoneList[action.milestoneId].tip = action.tip;
      return milestoneList;

    case types.CHANGE_MILESTONE_PLACE_INFO:
      milestoneList[action.milestoneId].placeInfo = action.placeInfo;
      return milestoneList;

    default:
      return state;
  }
}
export default milestoneList;