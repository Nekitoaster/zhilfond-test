import styles from "./SearchBar.module.css";
import PropTypes from "prop-types";

// компонент для поиска сотрудников по API

SearchBar.propTypes = {
  setResults: PropTypes.func,
  setOnShowed: PropTypes.func,
  setInput: PropTypes.func,
  input: PropTypes.string,
  setIsLoading: PropTypes.func,
  setError: PropTypes.func,
};

function SearchBar({
  setResults,
  setOnShowed,
  setInput,
  input,
  setIsLoading,
  setError,
}) {
  function fetchData(value) {
    // внутри этой функции мы получаем api, также делаем
    // некоторые улучшения данных полученных из input
    // для более удобного вывода результатов

    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        let values = value.match(/[^,\s][^,]*[^,\s]*/g);
        let clearValues = [];
        if (values) {
          for (let i = 0; i < values.length; i++) {
            clearValues.push(values[i].replace(/\s+/g, " ").trim());
          }
        }

        let results = [];
        for (let i = 0; i < json.length; i++) {
          for (let j = 0; j < clearValues.length; j++) {
            if (
              json[i].name.toLowerCase().includes(clearValues[j])
            ) {
              results = [...results, json[i]];
            } else if (json[i].id == clearValues[j]) {
              results = [...results, json[i]];
            }
          }
        }
        setResults(Array.from(new Set(results)));
      })
      .then(() => setIsLoading(false))
      .catch(() => setError(true));
  }

  function handleChange(value) {
    // функция для передачи данных в fetch
    // также при каждом изменении инпута компонент 
    // PersonData будет возвращаться в изначальное состояние

    setInput(value);
    fetchData(value.toLowerCase());
    setOnShowed(false);
  }

  return (
    <div className={styles.wrapper}>
      <label>
        Поиск сотрудников
        <input
          onChange={(e) => handleChange(e.target.value)}
          value={input}
          type="text"
          placeholder="Введите id или имя"
        />
      </label>
    </div>
  );
}

export default SearchBar;
