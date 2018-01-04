import React, { Component } from 'react';

import ListImages from './ListImages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    };
  }

  clickHandler = () => {
    this.setState({ animate: !this.state.animate });
  }

  render() {
    return (
      <div className="main-content">
        <h1>LQIP for React</h1>

        <div className="left">How use:</div>
        <pre>
          <code>
            {`
import Image from 'lqip-react';

const renderImage = (props) => (
  <Image
    src={props.ImageSrc}
    thumbnail={props.thumbnailSrc}
    aspectRatio={props.ascpetRatio} // could be '1024x768'
  />
);

export default renderImage;
            `}
          </code>
        </pre>

        <ListImages />
      </div>
    );
  }
}

export default App;
