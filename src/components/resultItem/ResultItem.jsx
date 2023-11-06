import styles from './ResultItem.module.css'
import PropTypes from "prop-types";

// компонент одного айтема для вывода в окне результатов

ResultItem.propTypes = {
  result: PropTypes.object,
  onShowItem: PropTypes.func,
  showItem: PropTypes.object,
};

function ResultItem({result, onShowItem, showItem}) {
    const {name, email} = result

  return (
    <div
      onClick={() => onShowItem(result)}
      className={showItem === result ? styles.item + ' ' + styles.active : styles.item}
    >
      <img src="src/img/icon.png" alt="" />
      <div className={styles.data}>
        <p className={styles.name}>{name}</p>
        <p className={styles.email}>{email}</p>
      </div>
    </div>
  );
}

export default ResultItem