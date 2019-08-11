import styles from '@components/Input/styles.scss';

export const getLabelClassName = (touched, error, active) => {
  if (active && (!touched || !error)) return styles.inputLabelActive;
  if (error && touched) return styles.inputLabelError;
  return styles.inputLabel;
};
