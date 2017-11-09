import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './stores/configureStore';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

import AppContainer from './components/AppContainer';

import { getPost } from './actions/blogActions';

injectTapEventPlugin();

const onPostEnter = (nextState) => {
  configureStore.dispatch(getPost(nextState.params.url));
};

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={configureStore}>
          <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
            </Route>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
