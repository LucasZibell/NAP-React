import React from 'react';
import { Form, reduxForm } from 'redux-form';

import Text from '@components/Text';
import RadioButton from '@components/RadioButton';
import withLoader from '@components/Loader';

import FormNames from './formFieldNames';

function MultipleChoice({ options, title, description }) {
  return (
    <Form className="row">
      <div className="column">
        <Text elementType="title-2">{title}</Text>
        <Text elementType="text-3">{description}</Text>
      </div>
      {options.map(elem => (
        <div key={elem.id} className="column">
          <RadioButton name={FormNames.ANSWER} value={elem.value} text={elem.text} />
        </div>
      ))}
    </Form>
  );
}

export default reduxForm({
  form: FormNames.MULTIPLE_CHOICE_FORM
})(withLoader(props => props.loading)(MultipleChoice));
