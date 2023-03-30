import './App.css';
import { useState } from 'react';

import { useNavigate } from "react-router-dom";

function Home() {

  // Estados dos inputs e navegador
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")
  const navigate = useNavigate();

  // Usuários do sistema
  const users = [
    { user: "Querino", senha: "123" }
  ]

  // Função de Login
  const Login = () => {

    if (users.find(e => e.user === usuario && e.senha === senha)) {
      return navigate("sistem/" + usuario)
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Login</h3>

        <div>
          <div className='inputGroup'>
            <label>Usuario </label>
            <input value={usuario} onChange={(e) => setUsuario(e.target.value)}></input>
          </div>

          <div className='inputGroup'>
            <label>Senha </label>
            <input value={senha} type="password" onChange={(e) => setSenha(e.target.value)}></input>
          </div>

          <button onClick={() => Login()}>
            Login
          </button>
        </div>

      </header>
    </div>
  );
}

export default Home;
