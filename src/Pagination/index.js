// @flow
import React, {Component} from 'react';
import styles from './Pagination.scss';

type page = {
  number: number,
  onPageClick: () => void
};

type Props = {
  +onNextClick: () => void,
  +onPreviousClick: () => void,
  +pages: Array<page>
};

class Pagination extends Component<Props> {
  render() {
    const {onNextClick, onPreviousClick, pages} = this.props;
    return (
      <div className={styles.container}>
        <div onClick={onPreviousClick}>
          <a className={styles.button}>Prev</a>
        </div>
        {pages.map(({number, onPageClick}) => (
          <div key={number} onClick={onPageClick}>
            <a className={styles.button}>{number}</a>
          </div>
        ))}
        <div onClick={onNextClick}>
          <a className={styles.button}>Next</a>
        </div>
      </div>
    );
  }
}

export default Pagination;
