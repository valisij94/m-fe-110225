import styles from './Button.module.css';

export default function Button( {btnText, clickHandler} ) {

  const classes = `${styles.button}`;
  return (
    <button className={classes} onClick={clickHandler}>{btnText}</button>
  )
}