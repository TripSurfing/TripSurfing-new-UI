import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo left"><i className="material-icons">favorite</i>TripSurfing</a>
            <div className="collection-item avatar right">
              <img id="avatar" className="circle" src={process.env.PUBLIC_URL+'/img/avatar.jpg'} alt=""/>
              <a id="account-wrapper"
                  className="dropdown-button right" href="#!" data-activates="account-dropdown" data-beloworigin="true"
                  >
                Son Nguyen
                <i className="material-icons right">arrow_drop_down</i>
              </a>
            </div>
            <ul id="account-dropdown" className="dropdown-content">
              <li><a href="#!">one</a></li>
              <li><a href="#!">two</a></li>
              <li className="divider"></li>
              <li><a href="#!">three</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
