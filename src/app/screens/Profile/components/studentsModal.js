import React, { Component } from 'react';
import Modal from 'react-modal';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

import TableProperties, { courseColumns, studentsColumns } from './tableProperties';

import styles from './styles.scss';

export const onClickFunction = (handleFunction, info) => ({
  onClick: () => info && handleFunction(info.original)
});

class StudentsModal extends Component {
  state = { students: null, selectedCourse: null };

  getTableProps = (_, rowInfo) => onClickFunction(this.selectCourse, rowInfo);

  selectCourse = info => {
    if (!this.state.students) this.setState({ students: info.students, selectedCourse: info.course_name });
  };

  resetStudents = () => this.setState({ students: null, selectedCourse: null });

  render() {
    const { closeModal, isOpen, courses } = this.props;
    const { students, selectedCourse } = this.state;
    return (
      <Modal isOpen={isOpen} onRequestClose={closeModal} className={styles.tableModal}>
        <div className="column">
          {selectedCourse && (
            <button
              className={`margin-bottom-20 self-start ${styles.backArrow}`}
              onClick={this.resetStudents}
            >
              Volver
            </button>
          )}
          {selectedCourse && (
            <span
              className={`margin-bottom-20 self-center ${styles.courseText}`}
            >{`Curso: ${selectedCourse}`}</span>
          )}
          <ReactTable
            data={students || courses}
            loading={false}
            loadingText={'Cargando alumnos'}
            getTdProps={this.getTableProps}
            columns={students ? studentsColumns : courseColumns}
            {...TableProperties}
          />
        </div>
      </Modal>
    );
  }
}

export default StudentsModal;
