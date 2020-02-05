import React from 'react';
import Dropzone from 'react-dropzone';
import Modal from 'react-modal';

import defaultImage from '@assets/icons/ic_upload.svg';

import styles from './styles.scss';

function csvModal({
  closeModal,
  isOpen,
  disabled,
  src,
  focused,
  handleLoadImage,
  actionImage,
  handleBlur,
  handleFocus
}) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.modal}>
      <a tabIndex="-1" href={src} target="_blank" rel="noopener noreferrer">
        <img alt="contingency_img" src={defaultImage} className={src ? styles.image : styles.default} />
      </a>
      <Dropzone
        className={`row ${styles.uploadImage}`}
        onDrop={handleLoadImage}
        inputProps={
          !disabled && {
            onBlur: handleBlur,
            onFocus: handleFocus
          }
        }
      >
        <img alt="action_img" src={actionImage} className={styles.actionImg} />
        <span className={focused ? styles.focus : disabled ? styles.disabledText : styles.text}>
          Subir CSV
        </span>
      </Dropzone>
    </Modal>
  );
}

export default csvModal;
