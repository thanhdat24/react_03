import { Button, SmallButton } from "../Components/Button";
import React, { Component } from "react";

import { StyledLink } from "../Components/Link";
import { TextField } from "../Components/TextField";

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        <Button className="button__style" background fontSize>
          Click me !
        </Button>
        <SmallButton>Hello Đạt</SmallButton>
        <StyledLink id="abc">Hihi</StyledLink>
        <TextField inputColor=" green" />
      </div>
    );
  }
}
