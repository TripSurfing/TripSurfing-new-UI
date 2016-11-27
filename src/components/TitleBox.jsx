import React from 'react';
// import {Editor, EditorState} from 'draft-js';
const TitleBox = ({tripInfo}) => {
  let titleAttr = {
    length: 70,
  }
  return (
    <div className="title-box row">
      <div className="title-box__wrapper col s12">

        <div className="input-field col s12">
          <textarea
            id="title"
            className="_light-display1 materialize-textarea"
            placeholder="Title Of Your Trip"
            defaultValue={tripInfo.title}
            maxLength={70}
            // length: 70
            />
        </div>

        <div className="trip-info">
          <div className="input-field col s3 trip-info__item">
            <i className="material-icons prefix">location_city</i>
            <input type="text" id="city" placeholder="City" className="_light-subheading" defaultValue={tripInfo.city}/>
          </div>
          <div className="input-field col s3 trip-info__item">
            <i className="large material-icons prefix">attach_money</i>
            <input type="text" id="cost" placeholder="Cost" className="_light-subheading" defaultValue={tripInfo.cost}/>
          </div>
          <div className="input-field col s3 trip-info__item">
            <i className="medium material-icons prefix">insert_invitation</i>
            <input type="date" id="start-date" placeholder="Start" className="datepicker _light-subheading" defaultValue={tripInfo.startDate}/>
          </div>
          <div className="switch col s3">
            <label className="_light-subheading">
              Private
              <input type="checkbox"/>
              <span className="lever"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TitleBox;
