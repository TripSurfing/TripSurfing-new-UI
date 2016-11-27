/*
 * Base Google Map example
 */
import React, { PropTypes, Component } from 'react';
// import { placeStyles } from './my_great_place_styled.js';
import $ from 'jquery';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_CENTER,
      style: maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true
  };
}

class Place extends Component {
  constructor(props) { super(props) }
  static propTypes = {
    $hover: PropTypes.bool
  }
  // shouldComponentUpdate() { return false };
  componentDidMount() {
    $('.tooltipped').tooltip();
  }
  render() {
    return (
      <div className="map__marker tooltipped" data-position="right" data-delay="10" data-tooltip={this.props.placeName}>
        {this.props.text}
      </div>
    )
  }
}

export default class SimpleMapPage extends Component {
  // shouldComponentUpdate = shouldPureComponentUpdate;
  constructor(props) {
    super(props);
    this.state = {
      center: { lat:30.725471, lng:76.685935 },
      zoom: 5
    }
  }
  // componentDidUpdate() {
  //   // refresh lại cái map chết tiệt
  //   if (this.props.mapView === true) {
  //     this.refresh();
  //     this.props.offmapView();
  //   }
  // }
  componentDidMount() {
    this.refresh();
    
  }
  refresh = () => {
    this.googleMapRef_._setViewSize();
    this.setState({
      center: {
        lat: this.state.center.lat + 0.0000000001,
        lng: this.state.center.lng + 0.0000000001,
      },
    });
  }
  componentWillReceiveProps() {
    let center = JSON.parse(JSON.stringify(this.props.milestoneList[0].placeInfo.location));
    if (center && center.lat) {
      center.lat += 10;
      center.lng -= 20;
      this.setState({
        center: center
      })
    }
  }
  render() {
    let {milestoneList} = this.props;
    // let center = JSON.parse(JSON.stringify(this.state.center));
    return (
      <GoogleMap
        resetBoundsOnResize={true}
        ref={r => this.googleMapRef_ = r}
        bootstrapURLKeys={{ key: "AIzaSyDC1yaq7qAhcImYiMWTekEORRuojkH-rdY" }}
        center={this.state.center}
        zoom={this.state.zoom}
        options={createMapOptions}>
        {this.props.milestoneList.map((milestone, index) => {
          let location = milestone.placeInfo.location;
          if (location) return <Place {...location} key={index} text={index+1} placeName={milestone.placeInfo.placeName}/>
          else return null;
        })}
      </GoogleMap>
    )
  }
}