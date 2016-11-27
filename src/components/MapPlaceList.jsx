import React, {Component} from 'react';


class PlaceItem extends Component {
  render() {
    let {place, imgUrl} = this.props;
    return (
      <div className="map__place-item row">
        <div className="place-item__info col m9">
          <div className="place-item__name">{place.placeName}</div>
          <div className="place-item__address">Address: {place.address}</div>
        </div>
        <div className="place-item__img col s12 m3" style={{background: `url(${imgUrl})`}}/>
      </div>
    );
  }
}

class MapPlaceList extends Component {
  
  render() {
    let {milestoneList}=this.props;
    return (
      <div>
        {milestoneList.map((milestone, index) => {
          if (milestone.status)
            return <PlaceItem 
              place={milestone.placeInfo}
              key={index}
              imgUrl={(milestone.images[0]) ? milestone.images[0].thumbnailUrl : "https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png"}
            />
        })}
      </div>
    );
  }
}

export default MapPlaceList;