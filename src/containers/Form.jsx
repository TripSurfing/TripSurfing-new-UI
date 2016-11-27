import React from 'react';
import Header from '../components/Header';
import TitleBox from '../components/TitleBox';
import Body from '../components/Body';
import Parallax from '../components/Parallax';
import {connect} from 'react-redux';


const Form = ({milestoneList, tripInfo}) => {
  // console.log(tripInfo);
  return(
    <div>
      <Header/>
      <Parallax url={process.env.PUBLIC_URL +'/img/background.jpg'}/>
      <TitleBox tripInfo={tripInfo}/>
      <Body milestoneList={milestoneList}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  milestoneList: state.milestoneList,
  tripInfo: state.tripInfo[0]
});
const mapDispartToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispartToProps)(Form);
