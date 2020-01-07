import React, { Component } from 'react';

import addImage from '@assets/icons/ic_green_add.svg';

import ImageUploader from './layout';
import { imageContainer } from './styles.scss';

class ImageUploaderContainer extends Component {
  state = {
    focused: false
  };

  handleBlur = () => this.setState({ focused: false });
  handleFocus = () => this.setState({ focused: true });

  render() {
    const { handleLoadImage, loading } = this.props;
    const { focused } = this.state;
    return (
      <div className={`column center space-around ${imageContainer}`}>
        <ImageUploader
          focused={focused}
          handleLoadImage={handleLoadImage}
          handleBlur={this.handleBlur}
          handleFocus={this.handleFocus}
          loading={loading}
          actionImage={addImage}
        />
      </div>
    );
  }
}

export default ImageUploaderContainer;
