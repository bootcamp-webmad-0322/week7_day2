import './App.css'
import MoviesList from './components/MoviesList/MoviesList';
import ProjectList from './components/ProjectsList/ProjectsList';
import SimpleList from './components/SimpleList/SimpleList';



function App() {
  return (
    <div className="App">
      <MoviesList />
      <ProjectList />
      <SimpleList />
    </div>
  );
}

export default App;
