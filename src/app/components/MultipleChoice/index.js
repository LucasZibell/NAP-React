import React from "react";
import { Form, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
import Text from "@components/Text";
import RadioButton from "@components/RadioButton";
import withLoader from "@components/Loader";
import Button from "@material-ui/core/Button";
import FormNames from "./formFieldNames";
import styles from "./styles.scss";
import imagenEjercicio from "@assets/img/digilab.jpg";
import amazedNappy from '@assets/nappy/amazed_nappy.png';

function MultipleChoice({ handleSubmit, options, title, description, exam, name, imageUrl }) {
  return (
    <Form className="row" onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Grid item xs={12}>
            <Text elementType="title-2" className="margin-bottom-10">
              {title}
            </Text>
          </Grid>
          <br></br>
          <Grid item xs={12}>
            <Text elementType="text-1" className="margin-bottom-10">
              {description}
            </Text>
          </Grid>
          {options.map(elem => (
            <Grid item xs={6}>
              <RadioButton key={elem.id} name={name} value={elem.value} text={elem.text} />
            </Grid>
          ))}
          <br></br>
          <br></br>
          <Grid item xs={12}>
            {exam || (
              <button>
                <Button variant="contained" size="large" className={styles.button}>
                  <span className={`${styles.textoBlanco}`}>Enviar Solucion</span>
                </Button>
              </button>
            )}
          </Grid>
        </Grid>
        <Grid item xs={6} alignContent="center">
          <img
            alt="excercise"
            src={imageUrl ? `${process.env.REACT_APP_API_BASE_URL}/${imageUrl}` : amazedNappy}
            style={{ width: '70%', height: '100%' }}
          />
        </Grid>
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
