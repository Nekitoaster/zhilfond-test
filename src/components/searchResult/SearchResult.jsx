import ResultItem from "../resultItem/ResultItem";
import styles from "./SearchResult.module.css";
import PropTypes from "prop-types";

// компонент для вывода всех подходящих запросу результатов

SearchResult.propTypes = {
  results: PropTypes.array,
  onShowItem: PropTypes.func,
  showItem: PropTypes.object,
  input: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
};

function SearchResult({
  results,
  onShowItem,
  showItem,
  input,
  isLoading,
  error,
}) {
  function isDone() {
    // функция для вывода в зависимости от статуса загрузки,
    // состояния иинпута, или наличия ошибки
    
    if (!input) {
      return <p className={styles.empty}>начните поиск</p>;
    } else if (error) {
      return (
        <p className={styles.error}>произошла ошибка, обновите страницу</p>
      );
    } else if (isLoading) {
      return <p className={styles.loading}>Загрузка...</p>;
    } else if (results.length > 0) {
      return results.map((result) => {
        return (
          <ResultItem
            showItem={showItem}
            onShowItem={onShowItem}
            key={result.id}
            result={result}
          />
        );
      });
    } else {
      return <p className={styles.nothing}>ничего не найдено</p>;
    }
  }

  return (
    <div className={styles.result}>
      <p>Результаты</p>
      <div className={styles.list}>{isDone()}</div>
    </div>
  );
}

export default SearchResult;
