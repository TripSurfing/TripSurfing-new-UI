import React, { Component } from 'react';
import ImageRow from '../ImageRow';
import MilestoneScroll from '../MilestoneScroll';
import $ from 'jquery';
const MilestoneTip = ({showTip, tipContent}) => {
  return (
    <div className={(tipContent === "" || showTip === false) ? "display--none" : "display--block"}>
      <div className="blank-div">z
        <br />
      </div>
      <div className="milestone__tip row">
        <span className="_dark-title col s12">Tip</span>
        <div className="col s12">
          <p line-break className="_dark-body1 milestone__tip--content">
            {tipContent}
          </p>
        </div>
      </div>
    </div>
  )
}

class MilestoneType1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTip: true
    }
  }
  componentDidMount() {
    const carouselId = `#carousel-id-${this.props.id}`;
    $(carouselId).carousel({
      full_width: true,
    });
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });
  }
  toggleTip = () => { this.setState({ showTip: !this.state.showTip }); }
  showButtonToggleTip = () => {
    let tip = this.props.milestoneData.tip;
    if (tip !== "") {
      return (
        <div className="col s12 milestone1__tools">
          <button className="btn-flat btn-clear waves-effect waves-light"
            onClick={() => { this.toggleTip() } }>
            <i className="material-icons left">warning</i>
            <span>{(this.state.showTip === true) ? "Hide tip" : "Show tip"}</span>
          </button>
        </div>)
    }
  }

  render() {
    const carouselId = `carousel-id-${this.props.id}`;
    return (
      <div className="milestone__wrapper row">
        <MilestoneScroll time={this.props.milestoneData.time} id={this.props.id} />

        <div className="row milestone__layout col m9">
          <div className="milestone__main row">

            <div className="col s5 milestone2__image-wrapper">
              <div className="carousel carousel-slider" id={carouselId}>
                {this.props.milestoneData.images.map((image, index) => {
                  return <div className="carousel-item milestone2__image carousel-item" key={index}
                    style={{ backgroundImage: 'url(' + image.url + ')' }}
                    >
                  </div>
                })}
              </div>
              <div className="milestone2__image--arrows">
                <i className="material-icons milestone2__image--arrow-left" onClick={() => { $('#' + carouselId).carousel('prev'); } }>chevron_left</i>
                <i className="material-icons milestone2__image--arrow-right" onClick={() => { $('#' + carouselId).carousel('next'); } }>chevron_right</i>
              </div>

            </div>

            <div className="col s7 milestone2__text">
              <span className={"milestone__title _dark-title col s11" + (this.props.milestoneData.title !== "" ? "" : " _dark-disabled")}>
                {this.props.milestoneData.title !== "" ? this.props.milestoneData.title : "No title"}
              </span>
              <i className="material-icons right milestone__edit dropdown-button col s1"
                data-activates={'milestone' + this.props.id + 'edit'} data-beloworigin="true">more_vert</i>
              
              <ul id={'milestone' + this.props.id + 'edit'} className='dropdown-content edit-menu'>
                <li><a onClick={() => { this.props.edit(this.props.id) } }>Edit</a></li>
                <li><a onClick={() => {this.props.deleteMilestone(this.props.id)}}>Delete</a></li>
              </ul>

              <div className="col s12">
                <span className={"line-break _dark-body1" + (this.props.milestoneData.content !== "" ? "" : " _dark-disabled")}>
                  {this.props.milestoneData.content !== "" ? this.props.milestoneData.content : "No content here"}
                </span>
              </div>
            </div>
            {this.showButtonToggleTip()}

          </div>
          <MilestoneTip showTip={this.state.showTip} tipContent={this.props.milestoneData.tip} id={this.props.id} />
        </div>
      </div>);
  }
}

export default MilestoneType1;
