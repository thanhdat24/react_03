import { Button, SmallButton } from "../Components/Button";
import React, { Component } from "react";

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        <Button className="button__style" background fontSize>
          Click me !
        </Button>
      <SmallButton>
          Hello Đạt
      </SmallButton>
      </div>
    );
  }
}
