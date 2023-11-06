import { useState } from 'react';
import SearchBar from '../searchBar/SearchBar';
import SearchResult from '../searchResult/SearchResult';
import styles from './SearchBlock.module.css'
import PersonData from '../personData/PersonData';

function SearchBlock() {
  // компонент объединяющий в себе SearchBar, 
  // SearchResult и PtrsonData

  let [input, setInput] = useState("");
  let [results, setResults] = useState([])
  let [showItem, setShowItem] = useState(null);
  let [onShowed, setOnShowed] = useState(false)
  let [isLoading, setIsLoading] = useState(false)
  let [error, setError] = useState(false);

  function onShowItem(item) {
    setOnShowed(true);
    setShowItem(item);
  }

  return (
    <div className={styles.search}>
      <div className={styles.search__field}>
        <SearchBar setError={setError} setIsLoading={setIsLoading} input={input} setInput={setInput} setOnShowed={setOnShowed} setResults={setResults} />
        <SearchResult error={error} isLoading={isLoading} input={input} showItem={showItem} onShowItem={onShowItem} results={results} />
      </div>
      <div className={styles.search__result}>
        {onShowed ? (
          <PersonData item={showItem} />
        ) : (
          <div className={styles.empty}>
            <p> Выберите сотрудника, чтобы посмотреть его профиль</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBlock