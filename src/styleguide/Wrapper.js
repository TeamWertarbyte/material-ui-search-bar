import React, { Component } from "react";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";

export default class Wrapper extends Component {
  render() {
    return (
      <div style={{ fontFamily: "Roboto, sans-serif" }}>
        <ThemeProvider theme={createTheme()}>
          {this.props.children}
        </ThemeProvider>
      </div>
    );
  }
}
