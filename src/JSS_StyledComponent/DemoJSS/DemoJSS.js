import React, { Component } from "react";

import { Button } from "../Components/Button";

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        <Button className="button__style" background fontSize>
          Click me !
        </Button>
      </div>
    );
  }
}
