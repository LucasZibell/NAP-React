import React from 'react';
import { Form, reduxForm } from 'redux-form';

import Text from '@components/Text';
import RadioButton from '@components/RadioButton';
import withLoader from '@components/Loader';

import FormNames from './formFieldNames';

import styles from './styles.scss';

function MultipleChoice({ handleSubmit, options, title, description }) {
  return (
    <Form className="row center" onSubmit={handleSubmit}>
      <div className="column margin-right-50">
        <Text elementType="title-2" className="margin-bottom-10">
          {title}
        </Text>
        <Text elementType="text-1" className="margin-bottom-10">
          {description}
        </Text>
        <button className={styles.button}>Enviar Solucion</button>
      </div>
      <div className="column">
        {options.map(elem => (
          <RadioButton key={elem.id} name={FormNames.ANSWER} value={elem.value} text={elem.text} />
        ))}
      </div>
    </Form>
  );
}

export default reduxForm({
  form: FormNames.MULTIPLE_CHOICE_FORM
})(withLoader(props => props.loading)(MultipleChoice));
