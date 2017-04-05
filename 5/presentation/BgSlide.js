import React, { Component } from "react";
import preloader from "spectacle/lib/utils/preloader";
import {
  Slide,
} from "spectacle";

const images = {
  bg: require("../assets/bg2.png"),
};

preloader(images);

export default class BgSlide extends Component {
  render() {
    return (
      <Slide bgImage={images.bg.replace("/", "")} {...this.props} />
    );
  }
}
