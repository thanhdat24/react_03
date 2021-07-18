import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

const configDarkTheme = {
  background: "#000",
  color: "#FFF",
  fontSize: "16px",
  fontWeight: "bold",
};
const configLightTheme = {
  background: "#808080",
  color: "#FFF",
  fontSize: "20px",
  fontWeight: "bold",
};
export default class DemoTheme extends Component {
  state = {
    currentTheme: configDarkTheme,
  };

  handleChangeValue = (event) => {
    this.setState({
      currentTheme:
        event.target.value === "dark" ? configDarkTheme : configLightTheme,
    });
  };
  render() {
    const DivStyle = styled.div`
      color: ${(props) => props.theme.color};
      padding: 5%;
      background-color: ${(props) => props.theme.background};
      font-size: ${(props) => props.theme.fontSize};
      font-weight: ${(props) => props.theme.fontWeight};
    `;
    return (
      <ThemeProvider theme={this.state.currentTheme}>
        <DivStyle>Hello Dat</DivStyle>
        <select onChange={this.handleChangeValue}>
          <option value="dark">Dark theme</option>
          <option value="light">Light theme</option>
        </select>
      </ThemeProvider>
    );
  }
}
