import React from 'react';

import Text from '@components/Text';

import styles from './styles.scss';

const columnClassName = 'column center middle';

const headerRender = (title, className = '') => (
  <Text elementType="title-6" className={`table-heading ${className}`}>
    {title}
  </Text>
);

const fieldRender = item => (
  <div className="row center full-width">
    <Text id={item && item.value} elementType="text-2" className="ellipsis">
      {item.value || '-'}
    </Text>
  </div>
);

const columns = [
  {
    Header: headerRender('Cursos'),
    accessor: 'course_name',
    className: columnClassName,
    Cell: fieldRender,
    headerClassName: 'header pointer',
    minWidth: 160
  },
  {
    Header: headerRender('Cantidad de alumnos'),
    id: 'amount_students',
    accessor: course => course.students.length,
    className: columnClassName,
    headerClassName: 'header pointer',
    Cell: fieldRender,
    minWidth: 210
  }
];

const getTrProps = () => ({
  style: {
    minHeight: '50px',
    height: '100%'
  }
});

export default {
  resizable: false,
  sortable: false,
  minRows: 8,
  defaultPageSize: 20,
  showPageSizeOptions: false,
  columns,
  className: `-highlight ${styles.tableStyle}`,
  getTrProps
};
