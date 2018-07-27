// @flow
import React from 'react';
import type {Node} from 'react';
import Pagination from './Pagination';
import styles from './App.scss';

function App(): Node {
  return (
    <div className={styles.page}>
      <Pagination
        pages={[
          {number: 1, onPageClick: () => console.log(1)},
          {number: 2, onPageClick: () => console.log(2)},
          {number: 3, onPageClick: () => console.log(3)}
        ]}
      />
    </div>
  );
}

export default App;
