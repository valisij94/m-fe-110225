import styles from './SimpleParagraph.module.css';
import commonStyles from './CommonStyles.module.css';

function SimpleParagraph() {

  return (
    <div>
      <p className={styles.greenBackground}>Simple paragraph text!</p>
      <p className={commonStyles.greenBackground}>Another paragraph text!</p>
    </div>
  )
}

export default SimpleParagraph;