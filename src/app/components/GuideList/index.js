import React from 'react';
import { t } from 'i18next';
import PropTypes from 'prop-types';

import Text from '@components/Text';

function GuideList({ excerciseList }) {
  return (
    <table>
      <tr>
        <th>{t('guide_list:TITLE')}</th>
        <th>{t('guide_list:DESCRIPTION')}</th>
      </tr>
      {excerciseList.map(elem => (
        <tr align="center" key={elem.id}>
          <td>
            <button onClick={() => console.log(elem.id)}>
              <Text>{elem.title}</Text>
            </button>
          </td>
          <td>
            <Text>{elem.description}</Text>
          </td>
        </tr>
      ))}
    </table>
  );
}

GuideList.propTypes = {
  excerciseList: PropTypes.arrayOf(PropTypes.shape({}))
};

export default GuideList;
