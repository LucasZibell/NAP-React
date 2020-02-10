import React from 'react';
import Modal from 'react-modal';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

import TableProperties from './tableProperties';

import styles from './styles.scss';

function StudentsModal({ closeModal, isOpen, courses, loading }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.tableModal}>
      <ReactTable data={courses} loading={false} loadingText={'Cargando alumnos'} {...TableProperties} />
    </Modal>
  );
}

export default StudentsModal;
