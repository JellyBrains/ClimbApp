import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header header-filtrer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="brand">
                <h1>React Project Example</h1>
                <h3>By: <a href="http://www.jodiehag.com" rel="noopener noreferrer" target="_blank">JodieHag</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
