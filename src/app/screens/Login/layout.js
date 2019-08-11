import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Form, reduxForm } from 'redux-form';

import { required } from '@utils/validationUtils';
import Input from '@components/Input';
import withLoader from '@components/Loader';
import Routes from '@constants/routes';

import FormNames from './formFieldNames';
import styles from './styles.scss';

function Login({ handleSubmit }) {
  return (
    <Form className={`column center full-width m-top-8 ${styles.formContainer}`} onSubmit={handleSubmit}>
      <div className="column center m-bottom-3">
        <h2 className="m-bottom-1">{t('login:LOGIN')}</h2>
        <h3>{t('login:LOGIN_EXPLANATION')}</h3>
      </div>
      <div className={`column m-bottom-2 ${styles.sectionContainer}`}>
        <Input
          label={t('login:EMAIL')}
          name={FormNames.EMAIL}
          inputType="text"
          validate={[required]}
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={t('login:EMAIL_PLACEHOLDER')}
        />
        <Input
          label={t('login:PASSWORD')}
          name={FormNames.PASSWORD}
          inputType="password"
          validate={[required]}
          inputClassName={`m-bottom-2 full-width ${styles.input}`}
          placeholder={t('login:PASSWORD_PLACEHOLDER')}
        />
      </div>
      <div className={`column center ${styles.sectionContainer}`}>
        <button className={`full-width m-bottom-1 ${styles.button}`}>{t('login:ENTER')}</button>
        <a href={Routes.RECOVER_PASSWORD}>{t('login:FORGOT_PASSWORD')}</a>
      </div>
    </Form>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: FormNames.LOGIN
})(withLoader(props => props.loading)(Login));
