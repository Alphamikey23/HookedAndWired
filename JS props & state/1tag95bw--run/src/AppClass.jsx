import React, { Component } from "react";
import "./App.css";

export default class AppClass extends Component {
  render() {
    const data = this.props.data || [];

    return (
      <div>
        <h1>Kalvium Gallery</h1>
        <div className="row">
          {data.map((image) => (
            <div className="column" key={image.id}>
              <img src={image.img} alt={`Gallery image ${image.img}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}