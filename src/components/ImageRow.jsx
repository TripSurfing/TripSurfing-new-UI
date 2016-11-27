import React, { Component } from 'react';
import $ from 'jquery';

const ImageItemType0 = ({image, delImg, imgId, milestoneId}) => {
  return (
    <div className="image-item__wrapper">
      <div className="image-item__shadow">
        <i className="material-icons" onClick={() => {delImg(milestoneId, imgId)}}>clear</i>
      </div>
      <img src={image.thumbnailUrl} className="responsive-img" alt="thumbnail" />
    </div>
  );
}

const ImageItemType1 = ({image, changeBackground, imgId}) => {
  
  return (
    <div className="image-item__wrapper--type1">
      <div className="image-item__shadow" onClick={() => changeBackground(imgId)}>
      </div>
      <img src={image.thumbnailUrl} className="responsive-img" alt="thumbnail" />
    </div>
  );
}

class ImageRow extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $("#image-row-" + this.props.milestoneId).mCustomScrollbar({
      axis: "x",
      // scrollButtons: { enable: true },
      advanced:{autoExpandHorizontalScroll:true},
      setHeight: "auto"
    });
  }
  render() {
    const {images, changeBackground, milestoneId, delImg} = this.props;
    if (images.length === 0) {
      $("#image-row-" + this.props.milestoneId).mCustomScrollbar("destroy");
      $("#image-row-" + this.props.milestoneId).mCustomScrollbar({
      axis: "x",
      // scrollButtons: { enable: true },
      advanced:{autoExpandHorizontalScroll:true},
      setHeight: "auto"
    });
    }
    return (
      <div is id={"image-row-" + milestoneId} class="image-row row col s12 mCustomScrollbar horizontal-images content" data-mcs-theme="dark-thin">
        <div className="scroll-wrapper"> {/** thẻ div bao bọc library mScroll */}
          {this.props.images.map((image, index) => {
            if (!changeBackground)
              return (<ImageItemType0 key={index} imgId={index} milestoneId={milestoneId} image={image} delImg={delImg}/>);
            else
              return <ImageItemType1 key={index} imgId={index} image={image} changeBackground={changeBackground} />
          })}
        </div>
      </div>

    );
  }
}

export default ImageRow;