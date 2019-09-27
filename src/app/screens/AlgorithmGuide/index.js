import React, { Fragment } from 'react';

import Text from '@components/Text';
import GuideList from '@components/GuideList';

const mockExcerciseList = [
  {
    id: 99,
    title: 'Ejercicio  30',
    description: 'Aprendemos a programar'
  },
  {
    id: 88,
    title: 'Ejercicio 66',
    description: 'Que es un if?'
  },
  {
    id: 77,
    title: 'Ejercicio 90',
    description: 'Que es un for?'
  }
];

function AlgorithmGuide() {
  return (
    <Fragment>
      <Text>Bienvenido a la guia de algoritmia</Text>
      <GuideList excerciseList={mockExcerciseList} />
    </Fragment>
  );
}

export default AlgorithmGuide;
