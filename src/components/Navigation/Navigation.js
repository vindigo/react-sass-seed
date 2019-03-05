import React from 'react';
import styles from './Navigation.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Navigation = () => {
  return (
    <div className={cx('navigation')}>
      <span className="logo">Logo</span>
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  )
}

export default Navigation