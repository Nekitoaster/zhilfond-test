import './App.css'
import Header from './components/header/Header'
import SearchBlock from './components/searchBlock/SearchBlock';

function App() {
  // Здесь мы просто объединяем Header и SearchBlock

  return (
    <div>
      <Header />
      <SearchBlock />
    </div>
  );
}

export default App