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

export const courseColumns = [
  {
    Header: headerRender('Cursos'),
    accessor: 'course_name',
    className: `${columnClassName} pointer`,
    Cell: fieldRender,
    headerClassName: 'header',
    minWidth: 160
  },
  {
    Header: headerRender('Cantidad de alumnos'),
    id: 'amount_students',
    accessor: course => course.students.length,
    className: `${columnClassName} pointer`,
    headerClassName: 'header',
    Cell: fieldRender,
    minWidth: 210
  }
];

export const studentsColumns = [
  {
    Header: headerRender('Usuario'),
    accessor: 'uid',
    className: columnClassName,
    Cell: fieldRender,
    headerClassName: 'header',
    minWidth: 160
  },
  {
    Header: headerRender('Nombre'),
    accessor: 'first_name',
    className: columnClassName,
    headerClassName: 'header',
    Cell: fieldRender,
    minWidth: 210
  },
  {
    Header: headerRender('Apellido'),
    accessor: 'last_name',
    className: columnClassName,
    headerClassName: 'header',
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
  minRows: 5,
  defaultPageSize: 5,
  showPageSizeOptions: false,
  className: `-highlight ${styles.tableStyle}`,
  getTrProps
};
