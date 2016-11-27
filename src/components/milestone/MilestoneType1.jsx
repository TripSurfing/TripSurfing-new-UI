import React, {Component} from 'react';
import ImageRow from '../ImageRow';
import MilestoneScroll from '../MilestoneScroll';
import $ from 'jquery';

const Milestonetip = ({showtip, tipContent}) => {
  return (
    <div className={(tipContent == "" || showtip === false) ? "display--none" : "display--block"}>
      <div className="blank-div">
        <br />
      </div>
      <div className="milestone__tip row">
        <span className="_dark-title col s12">Tip</span>
        <div className="col s12">
          <p className="line-break _dark-body1 milestone__tip--content">
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
      showtip: true,
      backgroundNumber: 0
    }
    // this.toggleTip = this.toggleTip.bind(this);
    // this.changeBackground = this.changeBackground.bind(this);
    // this.showButtonToggleTip = this.showButtonToggleTip.bind(this);
  }
  componentDidMount() {
    $("#image-row-"+this.props.id).mCustomScrollbar({
      axis: "x",
      scrollButtons: {enable: true}
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
  toggleTip = () =>  {this.setState({showtip: !this.state.showtip});}
  changeBackground = (imgId) => {this.setState({backgroundNumber: imgId})};
  showBackground = () => {
    if(this.props.milestoneData.images.length !== 0) {
      let backgroundUrl = this.props.milestoneData.images[this.state.backgroundNumber].url;
      return <div className="milestone__background">
            <img src={backgroundUrl} alt="image-background" className="responsive-img col s12"/>
          </div>
    } else return null;
  }
  showImageRow = () => {
    if(this.props.milestoneData.images.length === 1) {
      return null
    } else return <ImageRow
            images={this.props.milestoneData.images}
            changeBackground={this.changeBackground}
            milestoneId={this.props.id}
          />
  }
  showButtonToggleTip = () => {
    let tip = this.props.milestoneData.tip;
    if (tip != "") {
      return(
        <div className="col s12 milestone1__tools">
          <button className="btn-flat btn-clear waves-effect waves-light"
            onClick={() => {this.toggleTip()} }>
            <i className="material-icons left">warning</i>
            <span>{(this.state.showtip === true) ? "Hide Tip" : "Show Tip"}</span>
          </button>
        </div>)
    }
  }
  render() {
  return (
    <div className="milestone__wrapper row">
      <MilestoneScroll time={this.props.milestoneData.time} id={this.props.id}/>
      <div className="row milestone__layout col m9">
        <div className="milestone__main row">

          <div className="col s12">
            <span className={"milestone__title _dark-title" + (this.props.milestoneData.title != "" ? "" : " _dark-disabled")}>
              {this.props.milestoneData.title != "" ? this.props.milestoneData.title : "No title"}
            </span>
            <i className="material-icons right milestone__edit dropdown-button"
              data-activates={'milestone'+this.props.id+'edit'} data-beloworigin="true">more_vert</i>
             <ul id={'milestone'+this.props.id+'edit'} className='dropdown-content edit-menu'>
              <li><a onClick={() => {this.props.edit(this.props.id)}}>Edit</a></li>
              <li><a onClick={() => {this.props.deleteMilestone(this.props.id)}}>Delete</a></li>
            </ul>
          </div>

          <div className="col s12">
            <div className={"line-break _dark-body1" + (this.props.milestoneData.content != "" ? "" : " _dark-disabled")}>
              {this.props.milestoneData.content != "" ? this.props.milestoneData.content : "No content here"}
            </div> 
          </div>
          {this.showBackground()}

          {this.showButtonToggleTip()}
        </div>
        <Milestonetip showtip={this.state.showtip} tipContent={this.props.milestoneData.tip} id={this.props.id}/>
      </div>
    </div>);
  }
}

export default MilestoneType1;
