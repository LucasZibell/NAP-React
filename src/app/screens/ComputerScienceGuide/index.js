import React, { Fragment } from 'react';

import Text from '@components/Text';
import GuideList from '@components/GuideList';

const mockExcerciseList = [
  {
    id: 20,
    title: 'Ejercicio X',
    description: 'Que es un celular?'
  },
  {
    id: 30,
    title: 'Ejercicio Y',
    description: 'Que es una notebook?'
  },
  {
    id: 44,
    title: 'Ejercicio Z',
    description: 'Que es un gps?'
  }
];

function ComputerScienceGuide() {
  return (
    <Fragment>
      <Text>Bienvenido a la guia de ciencias de la computacion</Text>
      <GuideList excerciseList={mockExcerciseList} />
    </Fragment>
  );
}

export default ComputerScienceGuide;
