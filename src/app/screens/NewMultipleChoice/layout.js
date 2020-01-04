import React from 'react';
import { t } from 'i18next';
import { Form, reduxForm } from 'redux-form';
import withLoader from '@components/Loader';
import { required } from '@utils/validationUtils';

import Input from '@components/Input';

import FormNames from './formFieldNames';
import styles from './styles.scss';

function NewMultipleChoice({ handleSubmit }) {
  return (
    <Form className="column" onSubmit={handleSubmit}>
      <Input
        label={t('new_exercise:TITLE')}
        name={FormNames.TITLE}
        type="text"
        validate={[required]}
        inputClassName={`m-bottom-2 full-width ${styles.input}`}
        placeholder={t('new_exercise:TITLE_PLACEHOLDER')}
        required
      />
      <Input
        label={t('new_exercise:DESCRIPTION')}
        name={FormNames.DESCRIPTION}
        type="text"
        validate={[required]}
        inputClassName={`m-bottom-2 full-width ${styles.input}`}
        placeholder={t('new_exercise:DESCRIPTION_PLACEHOLDER')}
        required
      />
      <Input
        label={t('new_exercise:ANSWER')}
        name={FormNames.ANSWER}
        type="text"
        validate={[required]}
        inputClassName={`m-bottom-2 full-width ${styles.input}`}
        placeholder={t('new_exercise:ANSWER_PLACEHOLDER')}
        required
      />
      <Input
        label={t('new_exercise:OPTION_1')}
        name={FormNames.OPTION_1}
        type="text"
        validate={[required]}
        inputClassName={`m-bottom-2 full-width ${styles.input}`}
        placeholder={t('new_exercise:OPTION_1_PLACEHOLDER')}
        required
      />
      <Input
        label={t('new_exercise:OPTION_2')}
        name={FormNames.OPTION_2}
        type="text"
        validate={[required]}
        inputClassName={`m-bottom-2 full-width ${styles.input}`}
        placeholder={t('new_exercise:OPTION_2_PLACEHOLDER')}
        required
      />
      <button type="submit">{t('new_exercise:CREATE')}</button>
    </Form>
  );
}

export default reduxForm({
  form: FormNames.NEW_EXERCISE
})(withLoader(props => props.loading)(NewMultipleChoice));
