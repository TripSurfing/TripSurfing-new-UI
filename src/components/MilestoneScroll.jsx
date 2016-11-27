import React  from 'react';

const MilestoneScroll = ({time, id}) => {
  return (
    <div className="milestone__scroll col m3">
      <div
        className={"_dark-subheading milestone__time--show col s12" + (time !== "" ? "" : " _dark-disabled")}>
        {time !== "" ? time : "Time not yet pick"}
      </div>
      <i className="material-icons milestone__icon">album</i>
    </div>
  );
}

export default MilestoneScroll;