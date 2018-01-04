import React, { Component } from 'react';
import Img from 'lqip-react';

import data from './data';

class ListImages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (ListImages.thing) {
      console.log('already defined:', ListImages.thing);
    } else {
      console.log('Deining value...');
      ListImages.thing = 20;
    }
  }

  renderImages = () => {
    const imgs = data.images.map((img) => {
      return (
        <div className="image" key={img.src} >
          <Img
            src={img.src}
            thumbnail={img.thumbnail}
            aspectRatio={img.aspectRatio}
          />
        </div>
      );
    });

    return imgs;
  }

  render() {
    return (
      <div>
        { this.renderImages() }
      </div>
    );
  }
}

export default ListImages;
