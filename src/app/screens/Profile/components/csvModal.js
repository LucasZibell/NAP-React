import React from 'react';
import Dropzone from 'react-dropzone';
import Modal from 'react-modal';
import addImage from '@assets/icons/ic_green_add.svg';

import fileAdd from '@assets/icons/ic_file_add.png';

import styles from './styles.scss';

function csvModal({ closeModal, src, isOpen, handleLoadImage }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.modal}>
      <div className="column center">
        <a tabIndex="-1" href={src} target="_blank" rel="noopener noreferrer">
          <img alt="add_csv" src={fileAdd} className={styles.default} />
        </a>
        <Dropzone className={`row ${styles.uploadImage}`} onDrop={handleLoadImage}>
          <img alt="action_img" src={addImage} className={styles.actionImg} />
          <span className={styles.text}>Subir CSV</span>
        </Dropzone>
      </div>
    </Modal>
  );
}

export default csvModal;
