import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';

import styles from './Button.module.css';

export default function Button( {btnText, clickHandler} ) {

  const { value } = useContext(ThemeContext);

  const classes = `${styles.button} ${styles['button_' + value]}`;
  return (
    <button className={classes} onClick={clickHandler}>{btnText}</button>
  )
}