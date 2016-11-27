import {render} from 'react-dom';
import React from 'react';
import router from './router';
import material from 'materialize-css';
import scroll from 'malihu-custom-scrollbar-plugin';
import datetimepicker from '../library/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker';
import general from './general.js';

import '../library/google-material/material-icons.css';
import '../node_modules/materialize-css/bin/materialize.css';
// import '../scss/main.scss';
import '../public/main.css';

// import $ from 'jquery';
// const $ = window.$ = window.jQuery = require('jquery');
// Library upload image
// import '../public/lib/upload/js/vendor/jquery.ui.widget';

// import '../public/lib/upload/js/load-image.all.min';
// import '../public/lib/upload/js/canvas-to-blod.min';

// import '../public/lib/upload/js/jquery.iframe-transport';
// import '../public/lib/upload/js/jquery.fileupload';
// import '../public/lib/upload/js/jquery.fileupload-process';
// import '../public/lib/upload/js/jquery.fileupload-image';
// import '../public/lib/upload/js/jquery.fileupload-validate';

// import scroll from 'malihu-custom-scrollbar-plugin';
// const store = configureStore(data);

render(
  router,
  document.getElementById('root')
)
