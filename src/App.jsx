import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult'

function App() {

  const [result, setResult] = useState([])

  return (
    <div className="container">
      <div className="search-bar-container">
        <SearchBar setResult={setResult} />
        <SearchResult result={result} />
      </div>
    </div>
  )
}

export default App
