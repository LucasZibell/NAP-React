import React from 'react';
import { t } from 'i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';

import Text from '@components/Text';
import Routes from '@constants/routes';
import { formatUrl } from '../../../utils/array';

function GuideList({ excerciseList, goToExamDetails, goToExcersiceDetails, exams }) {
  return (
    <table>
      <tr>
        <th>{t('guide_list:TITLE')}</th>
        <th>{t('guide_list:DESCRIPTION')}</th>
      </tr>
      {excerciseList.map(elem => (
        <tr align="center" key={elem.id}>
          <td>
            <button onClick={() => (exams ? goToExamDetails(elem.id) : goToExcersiceDetails(elem.id))}>
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
  excerciseList: PropTypes.arrayOf(PropTypes.shape({})),
  goToExcersiceDetails: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  goToExcersiceDetails: id => dispatch(push(formatUrl(Routes.EXERCISE_DETAILS, id))),
  goToExamDetails: id => dispatch(push(formatUrl(Routes.EXAM, id)))
});

export default connect(
  null,
  mapDispatchToProps
)(GuideList);
