import React, { Component } from "react"
import Slider from "react-slick"

import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"

export default class SimpleSlider extends Component {
  render() {
    const settings = {

    }
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <div>hola</div>
          </div>
          <div>
            <div>mundo</div>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    )
  }
}
