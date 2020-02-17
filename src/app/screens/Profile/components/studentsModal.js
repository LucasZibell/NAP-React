import React, { Component } from 'react';
import Modal from 'react-modal';
import ReactTable from 'react-table-v6';
import { toast } from 'react-toastify';
import 'react-table-v6/react-table.css';

import { changeBook } from '@services/StudentService';

import TableProperties, { courseColumns, studentsColumns } from './tableProperties';

import styles from './styles.scss';

import BookForm from './BookForm';

export const onClickFunction = (handleFunction, info) => ({
  onClick: () => info && handleFunction(info.original)
});

class StudentsModal extends Component {
  state = { students: null, selectedCourse: null, selectedBook: null, id: null };

  getTableProps = (_, rowInfo) => onClickFunction(this.selectCourse, rowInfo);

  selectCourse = info => {
    if (!this.state.students)
      this.setState({
        id: info.id,
        students: info.students,
        selectedCourse: info.course_name,
        selectedBook: info.book
      });
  };

  changeBook = ({ selected_book: selectedBook }) => {
    if (selectedBook) {
      changeBook(this.state.id, { update: { book: selectedBook } }).then(
        () => {
          this.props.getCourses();
          this.props.closeModal();
          this.resetStudents();
          toast.success('Libro cambiado con exito');
        },
        () => toast.error('No se pudo asignar el libro, intente de nuevo mas tarde')
      );
    } else {
      toast.error('Seleccione un libro para asignar');
    }
  };

  resetStudents = () =>
    this.setState({
      id: null,
      students: null,
      selectedCourse: null,
      selectedBook: null
    });

  render() {
    const { closeModal, isOpen, courses, books } = this.props;
    const { students, selectedCourse, selectedBook } = this.state;
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
          {selectedCourse && (
            <BookForm books={books} selectedBook={selectedBook} onSubmit={this.changeBook} />
          )}
        </div>
      </Modal>
    );
  }
}

export default StudentsModal;
