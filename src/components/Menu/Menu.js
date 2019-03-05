import React from 'react';
import styles from './Menu.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Menu = () => {
  return (
    <div className={cx('menu')}>
      <p>Menu</p>
    </div>
  )
}

export default Menu