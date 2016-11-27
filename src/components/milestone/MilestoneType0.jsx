import React, { Component } from 'react';
import ImageRow from '../ImageRow';
import MilestoneScroll from '../MilestoneScroll';
import MilestoneTitle from '../MilestoneTitle';
import $ from 'jquery';
import firebase from 'firebase';
const addImagehandler = image => {
  this.props.addImg(this.props.id, image);
}
const handleAddDetailImgs = (e, addImg, id) => {
  e.preventDefault();
  let readers = [];
  let files = e.target.files;
  let result = {
    file: "",
    imgPreviewUrl: ""
  };

  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    const filename = Math.floor(Date.now() / 1000).toString() + Math.random().toString(36).substring(3, 13);
    const storageRef = firebase.storage().ref('-KXUH_Zl8_jReDTJb9gU/-KXUJpvGVZDq-_sQtGUt/' + filename);
    const task = storageRef.put(file);
    task.then(snap => {
      let image = {
        thumbnailUrl: snap.downloadURL,
        url: snap.downloadURL
      }
      // console.log(snap);
      addImg(id, image);
    });
    task.on('state_changed',
      snapshot => {
        console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('done');
      }
    )
    // readers[i] = new FileReader();
    // readers[i].onloadend = () => {
    //   result.file = file;
    //   result.imgPreviewUrl = readers[i].result;
    //   pushDetailImg(result, sectionId, mileStoneId);
    // };
    // readers[i].readAsDataURL(file);
  }
};

const MilestoneTools = ({toggleTip, id, post, status, addImg}) => {
  return (
    <div className="milestone__tools col s12">
      <div className="col s10 milestone__tools__btn-group">

        <div className="milestone__image-input-field">
          <input id={"image-input-" + id} data-milestoneId={id} type="file" multiple
            onChange={e => {
              handleAddDetailImgs(e, addImg, id);
            } }
            />
          <label className="btn-flat waves-effect waves-light btn-clear" htmlFor={"image-input-" + id}>
            <i className="material-icons">add_a_photo</i>
            <span>Add images</span>
          </label>
        </div>

        <button className="btn-flat btn-clear waves-effect waves-light"
          onClick={() => { toggleTip() } }>
          <i className="material-icons left">warning</i>
          <span>Add tip</span>
        </button>

        <div className="milestone__time-input-field">
          <input id={"time-input-" + id} data-milestoneId={id} className="milestone__time" type="text" />
          <label className="btn-flat waves-effect waves-light btn-clear" htmlFor={"time-input-" + id}>
            <i className="material-icons">schedule</i>
            <span>Add time</span>
          </label>
        </div>

      </div>

      <button className="btn waves-effect waves-light col s2 right btn-post"
        onClick={() => {
          // const userRef = firebase.database().ref('user');
          // const tripRef = firebase.database().ref('trip');

          // const newTrip = {
          //   city: 'Ha noi',
          //   cost: '50000',
          //   created: '20/10/2016',
          //   currency: 'VND',
          //   image: 'http://7-themes.com/data_images/out/31/6873873-christmas-wallpaper-hd.jpg',
          //   start_date: '20/10/2016',
          //   summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eum nostrum molestias possimus blanditiis, dignissimos ullam reiciendis voluptatum quia. In alias id modi commodi earum, voluptas ab, aliquid. Similique, repellat.',
          //   title: '4 days mission camp in Thailand',
          //   updated: '20/10/2016',
          //   milestone: {

          //   },
          //   '-KXUH_Zl8_jReDTJb9gU': {
          //     avatar: 'http://findicons.com/files/icons/175/halloween_avatar/128/scream.png',
          //     name: 'Anonymous account'
          //   }
          // }
          // const newUser = {
          //   avatar: '',
          //   created: 'test',
          //   email: 'test',
          //   first_name: 'Anonymoust',
          //   last_name: 'User',
          //   password: '123456'
          // }
          // const user_tripRef = firebase.database().ref('user_trip');
          // const milestoneRef = firebase.database.ref('trip/-KXUH_Zl8_jReDTJb9gU/-KXUH_Zl8_jReDTJb9gU/milestone');
          // let newMilestone = {
          //   content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sapiente totam quod incidunt, natus odit dolore nisi accusamus minima quidem, autem commodi eius, quibusdam aperiam itaque consectetur vel molestias. Dolorem!',
          //   layout: 1,
          //   time: '16:40 30/03/2016',
          //   tip: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, nihil ad esse. Natus, voluptas, labore?',
          //   // image
          // }
          // tripRef.push(newTrip, err => {
          //   if (err) console.log(err);
          //   else {
          //     tripRef.once('child_added', snap => {
          //       let newTripId = snap.key;
          //       let temp = {};
          //       temp[newTripId] = {
          //         city: 'Ha noi',
          //         cost: '50000',
          //         created: '20/10/2016',
          //         currency: 'VND',
          //         image: 'http://7-themes.com/data_images/out/31/6873873-christmas-wallpaper-hd.jpg',
          //         start_date: '20/10/2016',
          //         summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eum nostrum molestias possimus blanditiis, dignissimos ullam reiciendis voluptatum quia. In alias id modi commodi earum, voluptas ab, aliquid. Similique, repellat.',
          //         title: '4 days mission camp in Thailand',
          //         updated: '20/10/2016'
          //       }
          //       user_tripRef.child('-KXUH_Zl8_jReDTJb9gU').set(temp);
          //     })
          //   }
          // })
          // let newUserKey = '';
          // userRef.push(newUser, err => {
          //   if (err) {
          //     console.log(err);
          //   } else {
          //     userRef.once('child_added', (snapshot, preChildKey) => {
          //       newUserKey = snapshot.key;
          //       let temp = {};
          //       temp[newUserKey] = {
          //         trip_count: 0
          //       } 
          //       user_tripRef.set(temp)
          //     })
          //   }
          // })
          // let user_tripPush = user_tripRef. 
          post(id)
        } }>
        {status === null ? "post" : status}
      </button>
    </div>
  );
}

const MilestoneTip = ({showTip, tipContent, id, changeMilestoneTip}) => {
  return (
    <div className={(showTip === true) ? "display--block" : "display--none"}>
      <div className="blank-div">
        <br />
      </div>

      <div className="milestone__tip row">
        <span className="_dark-title col s12">Tip</span>
        <div className="input-field col s12">
          <textarea
            className="materialize-textarea _dark-body1"
            type="text"
            defaultValue={tipContent} placeholder="Some tips for other people"
            onBlur={e => { changeMilestoneTip(id, e.target.value.trim()) } }
            />
        </div>
      </div>
    </div>
  )
}

class MilestoneType0 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTip: false
    }
  }
  componentDidMount() {
    let timeInputId = '#time-input-' + this.props.id;
    $(timeInputId).bootstrapMaterialDatePicker({
      // date: false,
      shortTime: true,
      okText: 'NEXT',
      cancelText: 'BACK',
      format: 'hh:mm A',
      nowButton: true
    });
    $(timeInputId).on('change', (e, d) => {
      // let id = '#time-show-'+this.props.id;
      let date = d._d;
      let options = {
        year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
      };
      let time = date.toLocaleString('en-us', options);
      this.props.changeMilestoneTime(this.props.id, time);
    });

    let imageInputId = '#image-input-' + this.props.id;
    // let url = 'http://localhost/upload/server/php/';

    // $(imageInputId).fileupload({
    //   url,
    //   type: 'POST',
    //   dataType: 'json',
    //   autoUpload: true,
    //   acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
    //   maxFileSize: 20971520, // 20 MB
    //   disableImageResize: /Android(?!.*Chrome)|Opera/
    //         .test(window.navigator.userAgent), // can kiem tra lai
    //   previewMaxWidth: 100,
    //   previewMaxHeight: 100,
    //   previewCrop: true,
    //   sequentialUploads: true,
    //   // add: (e, data) => {
    //   //   var
    //   // },
    //   processalways: (e, data) => {
    //     let canvas = data.files[0].preview;
    //     let dataUrl = canvas.toDataURL();
    //     var tempImgId = Math.floor(Date.now()/1000).toString() + Math.random().toString(36).substring(3, 8)
    //     data.files[0].tempImgId = tempImgId;
    //     let temp = {
    //       thumbnailUrl: dataUrl,
    //       tempImgId: tempImgId
    //     }
    //     this.props.addPreviewImg(this.props.id, temp)
    //   },
    //   submit: (e, data) => {
    //     data.formData = {
    //       tempImgId: data.files[0].tempImgId
    //     }
    //   },
    //   done: (e, data) => {
    //     for (let i = 0, len = data.result.files.length; i < len; i++) {
    //       let file = data.result.files[i];
    //       this.props.addImg(this.props.id, file);
    //     }
    //   }
    // })

  }
  toggleTip = () => { this.setState({ showTip: !this.state.showTip }); }

  render() {
    return (
      <div className="milestone__wrapper row">
        <MilestoneScroll time={this.props.milestoneData.time} id={this.props.id} />

        <div className="row milestone__layout col m9">
          <div className="milestone__main row">
            <div className="input-field col s10">
              <MilestoneTitle
                milestoneId={this.props.id}
                changeMilestoneTitle={this.props.changeMilestoneTitle}
                changeMilestonePlaceInfo={this.props.changeMilestonePlaceInfo}
                currentTitle={this.props.milestoneData.title}
                />
            </div>

            <a className="btn-flat waves-effect waves-light col s1"
              onClick={() => { this.props.chooseLayout(this.props.id, 1) } }>
              <i className="material-icons center">stay_current_landscape</i>
            </a>
            <a className="btn-flat waves-effect waves-light col s1"
              onClick={() => { this.props.chooseLayout(this.props.id, 2) } }>
              <i className="material-icons center">stay_current_portrait</i>
            </a>

            <div className="input-field col s12">
              <textarea className="materialize-textarea milestone__content _dark-body1"
                placeholder="Say something about it"
                defaultValue={this.props.milestoneData.content}
                onBlur={e => { console.log(e.target.value); this.props.changeMilestoneContent(this.props.id, e.target.value) } }
                />
            </div>

            <ImageRow
              images={this.props.milestoneData.images}
              milestoneId={this.props.id}
              delImg={this.props.delImg}
              />
            <MilestoneTools
              toggleTip={this.toggleTip}
              id={this.props.id}
              post={this.props.post}
              status={this.props.milestoneData.status}
              addImg={this.props.addImg}
              />
          </div>

          <MilestoneTip
            showTip={this.state.showTip}
            tipContent={this.props.milestoneData.tip}
            id={this.props.id}
            changeMilestoneTip={this.props.changeMilestoneTip}
            />
        </div>
      </div>);
  }
}

export default MilestoneType0;
