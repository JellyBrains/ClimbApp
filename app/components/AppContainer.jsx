import React from 'react';
import Header from './common/Header';

require('../static/scss/App.scss');

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default AppContainer;
