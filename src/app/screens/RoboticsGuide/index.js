import React, { Fragment } from 'react';

import Text from '@components/Text';
import GuideList from '@components/GuideList';

const mockExcerciseList = [
  {
    id: 1,
    title: 'Ejercicio 1',
    description: 'Este es facil'
  },
  {
    id: 2,
    title: 'Ejercicio 2',
    description: 'Este tambien'
  },
  {
    id: 3,
    title: 'Ejercicio 3',
    description: 'Este no'
  }
];

function RoboticsGuide() {
  return (
    <Fragment>
      <Text>Bienvenido a la guia de robotica</Text>
      <GuideList excerciseList={mockExcerciseList} />
    </Fragment>
  );
}

export default RoboticsGuide;
