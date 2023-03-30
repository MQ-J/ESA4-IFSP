import './App.css';
import { useParams } from "react-router-dom";

function App() {
  const { user } = useParams();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bem vindo, {user}.
        </p>
      </header>
    </div>
  );
}

export default App;
