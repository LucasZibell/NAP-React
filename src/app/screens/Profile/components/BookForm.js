import React from 'react';
import { Form, reduxForm } from 'redux-form';

import Selector from '@components/Selector';

function BookForm({ books, selectedBook, handleSubmit }) {
  return (
    <Form className="column" onSubmit={handleSubmit}>
      <span className="margin-top-20 margin-bottom-20">{`Libro actual: ${selectedBook}`}</span>
      <div className="row space-between">
        <Selector name="selected_book" options={books} title="Seleccionar nuevo libro" />
        <button type="submit" className="btn-secondary">
          Cambiar de libro
        </button>
      </div>
    </Form>
  );
}

export default reduxForm({
  form: 'change-book'
})(BookForm);
