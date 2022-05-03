import { useState } from 'react';
import './App.css';
import Counter from './components/BasicCounter/BasicCounter';

function App() {

  const [theme, setTheme] = useState('light')

  const changeTheme = e => setTheme(e.currentTarget.value)


  return (
    <div className={`App ${theme}`}>

      <h1>Estado y eventos en React</h1>

      <Counter />

      <select onChange={changeTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>

    </div>
  )
}

export default App;
