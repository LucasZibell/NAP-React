import React, { Fragment } from 'react';
import Dropzone from 'react-dropzone';

import defaultImage from '@assets/icons/ic_upload.svg';
import withLoader from '@components/Loader';

import styles from './styles.scss';

function ImageUploader({ disabled, src, focused, handleLoadImage, actionImage, handleBlur, handleFocus }) {
  return (
    <Fragment>
      <a tabIndex="-1" href={src} target="_blank" rel="noopener noreferrer">
        <img alt="exercise_image" src={defaultImage} className={src ? styles.image : styles.default} />
      </a>
      <Dropzone
        className={`row ${styles.uploadImage}`}
        onDrop={handleLoadImage}
        disabled={disabled}
        inputProps={
          !disabled && {
            onBlur: handleBlur,
            onFocus: handleFocus
          }
        }
      >
        <img alt="action_img" src={actionImage} className={styles.actionImg} />
        <span className={focused ? styles.focus : disabled ? styles.disabledText : styles.text}>
          Agregar Imagen
        </span>
      </Dropzone>
    </Fragment>
  );
}

export default withLoader(props => props.loading)(ImageUploader);
