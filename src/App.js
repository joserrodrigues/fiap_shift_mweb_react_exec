import logo from './logo.svg';
import './App.css';


function App() {

  let info = `Informacão ${Math.random()}`;
  return (
    <div className="App">
      <p>
        {info}
      </p>
    </div>
  );
}

export default App;