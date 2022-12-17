import * as React from 'react';
import classes from './header.module.scss';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className={classes.header}>
      <nav className={classes.header_Navbar}>
        <div className={classes.Navbar_left}>
          <ul>
            <li id="cart-content">
              <a href="/fa/cart">
                <span className="margin-top-3">۰</span>{' '}
                <i className="fas fa-shopping-cart"></i>{' '}
                <span className="hidden-on-scroll uk-visible@s">سبد خرید</span>
              </a>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={classes.Navbar_Right}>
          <ul>
            <li>
              <a href="/en">
                <span className="margin-top-1">En</span>
              </a>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
