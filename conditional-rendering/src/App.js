import { useState } from 'react';
import './App.css'
import MoviesList from './components/MoviesList/MoviesList';
import Spinner from './components/Spinner/Spinner';


function App() {

  const [isLoading, setIsLoading] = useState(false)   // <= play here!

  return (
    <div className="App">

      {isLoading ? <Spinner /> : <MoviesList />}

    </div>
  );
}

export default App