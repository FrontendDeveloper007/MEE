import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello world!
        </h1>
        <p className="text-3xl font-bold underline">
          This is a simple page 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>        
      < User/>
      </header>
      
      
      
    </div>
  );
}

export default App;
