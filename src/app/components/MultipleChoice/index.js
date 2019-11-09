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

function MultipleChoice({ handleSubmit, options, title, description }) {
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
          {/* <Grid item xs={6}>
          1
        </Grid>
        <Grid item xs={6}>
          2
        </Grid> */}
          {options.map(elem => (
            <Grid item xs={6}>
              <RadioButton
                key={elem.id}
                name={FormNames.ANSWER}
                value={elem.value}
                text={elem.text}
              />
            </Grid>
          ))}
          <br></br>
          <br></br>
          <Grid item xs={12}>
            <button>
              <Button
                variant="contained"
                size="large"
                className={styles.button}
              >
                <span className={`${styles.textoBlanco}`}>Enviar Solucion</span>
              </Button>
            </button>
          </Grid>
        </Grid>
        <Grid item xs={6} alignContent="center">
          <img
            src={imagenEjercicio}
            alt="imagenEjercicio"
            style={{ width: '70%', height: '100%' }}
          />
        </Grid>
      </Grid>
      {/* <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <div className="column margin-right-50">
            <Text elementType="title-2" className="margin-bottom-10">
              {title}
            </Text>
            <Text elementType="text-1" className="margin-bottom-10">
              {description}
            </Text>
            <button>
              <Button
                variant="contained"
                size="large"
                className={styles.button}
              >
              <span className={`${styles.textoBlanco}`}>Enviar Solucion</span>
              </Button>
            </button>
          </div>
          <div className="column">
            {options.map(elem => (
              <RadioButton
                key={elem.id}
                name={FormNames.ANSWER}
                value={elem.value}
                text={elem.text}
              />
            ))}
          </div>
        </Grid>
      </Grid> */}
    </Form>
  );
}

export default reduxForm({
  form: FormNames.MULTIPLE_CHOICE_FORM
})(withLoader(props => props.loading)(MultipleChoice));
