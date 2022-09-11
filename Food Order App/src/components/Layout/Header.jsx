import { Fragment } from 'react';
import mealsImage from '../../assets/wings_pizza.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Barber Bites</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of food' />
      </div>
    </Fragment>
  );
};

export default Header;
