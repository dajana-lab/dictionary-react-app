import './App.css';
import Dictionary from './Dictionary';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <div className='container'>
<h1>Dictionary App</h1> 

<main>
  <Dictionary />
</main>
<footer className='coded-by'><small>Coded by Dajana</small></footer>
</div>
    </div>
  );
}

export default App;
