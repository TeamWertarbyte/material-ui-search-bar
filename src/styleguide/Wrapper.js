import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const Wrapper = () =>
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      {this.props.children}
    </div>
  </MuiThemeProvider>;

export default Wrapper;
