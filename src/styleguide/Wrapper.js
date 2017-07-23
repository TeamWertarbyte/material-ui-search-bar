import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

export default class Wrapper extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div style={{fontFamily: 'Roboto, sans-serif'}}>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
