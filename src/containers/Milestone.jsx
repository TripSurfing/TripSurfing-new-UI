import React from 'react';
import MilestoneType1 from '../components/milestone/MilestoneType1';
import MilestoneType2 from '../components/milestone/MilestoneType2';
import MilestoneType0 from '../components/milestone/MilestoneType0';

import {bindActionCreators} from 'redux';
import actions from '../actions';
import {connect} from 'react-redux';
// console.log(actions);
const Milestone=({milestoneData, id, actions}) => {
  switch (milestoneData.layout) {
    case 0:
      return <MilestoneType0
              milestoneData={milestoneData}
              id={id}
              post={actions.post}
              addPreviewImg={actions.addPreviewImg}
              addImg={actions.addImg}
              delImg={actions.delImg}
              chooseLayout={actions.chooseLayout}
              searchPlace={actions.searchPlace}
              
              changeMilestoneTitle={actions.changeMilestoneTitle}
              changeMilestoneTime={actions.changeMilestoneTime}
              changeMilestoneContent={actions.changeMilestoneContent}
              changeMilestoneTip={actions.changeMilestoneTip}
              changeMilestonePlaceInfo={actions.changeMilestonePlaceInfo}
              />
    case 1:
      return <MilestoneType1
                edit={actions.edit} 
                milestoneData={milestoneData} 
                id={id}
                deleteMilestone={actions.deleteMilestone}  
              />
    case 2:
      return <MilestoneType2 
                edit={actions.edit}
                milestoneData={milestoneData}
                id={id}
                deleteMilestone={actions.deleteMilestone}
              />
    default:
      break;
  }
};

const mapDispartToProps=(dispatch) => ({
  actions: bindActionCreators(actions.milestoneActions, dispatch)
})
const mapStateToProps=(state) => ({});
export default connect(mapStateToProps, mapDispartToProps)(Milestone);
