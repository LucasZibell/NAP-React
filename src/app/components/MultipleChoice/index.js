import React from 'react';
import { Form, reduxForm } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import Text from '@components/Text';
import RadioButton from '@components/RadioButton';
import withLoader from '@components/Loader';
import amazedNappy from '@assets/nappy/amazed_nappy.png';

import FormNames from './formFieldNames';

import styles from './styles.scss';

function MultipleChoice({ handleSubmit, options, title, description, exam, name, imageUrl, videoUrl }) {
  const image = imageUrl ? `${process.env.REACT_APP_API_BASE_URL}/${imageUrl}` : amazedNappy;
  const showImage = imageUrl || !exam;
  return (
    <Form className={`row ${styles.mcForm}`} onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Grid item xs={12}>
            <Text elementType="title-1" className="margin-bottom-10">
              {title}
            </Text>
          </Grid>
          <br />
          <Grid item xs={12}>
            <Text elementType="title-3" className="margin-bottom-10">
              {description}
            </Text>
          </Grid>
          {options.map(elem => (
            <Grid item xs={12} key={elem.id}>
              <RadioButton name={name} value={elem.value} text={elem.text} />
            </Grid>
          ))}
          <br />
          <br />
          <Grid item xs={12}>
            {exam || (
              <button className="btn-primary" type="submit">
                Enviar Solucion
              </button>
            )}
          </Grid>
        </Grid>
        {showImage && (
          <div className="column middle">
            <img className="margin-bottom-50" alt="excercise" src={image} width="600" height="340" />
            {videoUrl && (
              <iframe
                title={videoUrl}
                src={videoUrl}
                width="600"
                height="340"
                frameBorder="0"
                allowFullScreen
              />
            )}
          </div>
        )}
      </Grid>
    </Form>
  );
}

MultipleChoice.defaultProps = {
  name: FormNames.ANSWER
};

export default reduxForm({
  form: FormNames.MULTIPLE_CHOICE_FORM
})(withLoader(props => props.loading)(MultipleChoice));
