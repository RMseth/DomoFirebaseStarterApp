"use strict";

import React          from "react";

export default class Index extends React.Component {

  render(){

    return (
      <div>
        <h1>Twitter Track</h1>
        {this.props.children}
        <div className="footer"></div>
      </div>
    );
  }

}
