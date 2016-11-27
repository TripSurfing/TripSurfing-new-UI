import React from 'react';
import Milestone from '../containers/Milestone';
import Map from './Map';
import MapPlaceList from './MapPlaceList';
class Body extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   mapView: false // false => đang ở tab khác, ko phải map
    // }
  }
  offmapView = () => {
    // rời tab map
    this.setState({mapView: false})
  }
  render() {
    const {milestoneList} = this.props;
    return (
      <div className="body-container">
        <div className="row">
          
            <div className="col s12 m10 offset-m1 l12 center">
              <ul className="tabs">
                <li className="tab"><a href="#itinerary" className="active">ITINERARY</a></li>
                <li className="tab"><a href="#map"
                  // onClick={() => {this.setState({mapView: true})}}
                  >MAP</a></li>
                <li className="tab"><a href="#all-photos">ALL PHOTOS</a></li>
              </ul>
            
          </div>

          <div className="body-main">
            <div id="itinerary" className="col m8 offset-m1">
              {milestoneList.map((milestone, index) => {
                return <Milestone milestoneData={milestone} key={index} id={index} />
              })}
            </div>
            <div id="map" className="col s12">
              <div className="col s12 m4 map-left">
                <MapPlaceList milestoneList={milestoneList}/>
              </div>
              <div className="col s12 m8 map__google">
                <Map milestoneList={milestoneList}/>
              </div>
            </div>
            <div id="all-photos" className="col s12">all-photos</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
