import { useState } from "react";
import Logo from '../../images/logo.png'
import { FiX, FiClipboard} from 'react-icons/fi'
import './Home.css'

export const HomePage = () => {

  const [lengthPassword, setLengthPassword] = useState(6);
  const [password, setPassword] = useState('Sua senha aparecerá aqui!');

  return (
    <div className="container-home">
      <div className="content">
        <img src={Logo} alt="logo" />
        <h1>Gerador de Senhas</h1>
        <p>Gere senhas fortes para sua segurança!</p>

        <div className="options">
          <div className="password-length">
            <div className="option">
              <strong>Tamanho</strong>
              <span>{lengthPassword}</span>
            </div>
            <div className="option">
              <input type="range" defaultValue='6' min='6' max='36' onChange={e => setLengthPassword(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="option">
              <strong>Maiusculas</strong>
              <label className="switch">
                <input type="checkbox" name="uppercase" id="uppercase" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="option">
              <strong>Minusculas</strong>
              <label className="switch">
                <input type="checkbox" name="lowercase" id="lowercase" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div>
            <div className="option">
              <strong>Números</strong>
              <label className="switch">
                <input type="checkbox" name="numbers" id="numbers" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="option">
              <strong>Simbolos</strong>
              <label className="switch">
                <input type="checkbox" name="symbols" id="symbols" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="area-password">
          <label placeholder="aaaa">{password}</label>
          <button>
            <FiClipboard size={20} color='white'/>
          </button>
        </div>

        <button>Gerar Senha</button>

      </div>
    </div>
  )
}
