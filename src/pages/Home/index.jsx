import { useState } from "react";
import Logo from '../../images/logo.png'
import {FiClipboard, FaRegSave} from 'react-icons/all'
import './Home.css'

export const HomePage = () => {

  const [lengthPassword, setLengthPassword] = useState(6);
  const [password, setPassword] = useState('');
  const [havePassword, setHavePassword] = useState(false);

  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  var generator = require('generate-password');

  const isChecked = () => {
    if (uppercase || lowercase || numbers || symbols) {
      return true;
    } else {
      return false;
    }
  }

  const generatePassword = (lengthPassword, numbers, symbols, lowercase, uppercase) => {
    var password = generator.generate({
      length: lengthPassword,
      numbers: numbers,
      symbols: symbols,
      lowercase: lowercase,
      uppercase: uppercase,
    });
    setHavePassword(true);
    return setPassword(password);
  }

  const savePassword = () => {
    alert('Senha salva!')
  }

  const copyPassword = () => {
    alert('Senha copiada!')
  }

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
              <input type="range" defaultValue='6' min='6' max='24' onChange={e => setLengthPassword(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="option">
              <strong>Maiusculas</strong>
              <label className="switch">
                <input onChange={e => setUppercase(e.target.checked)} type="checkbox" name="uppercase" id="uppercase" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="option">
              <strong>Minusculas</strong>
              <label className="switch">
                <input onChange={e => setLowercase(e.target.checked)} type="checkbox" name="lowercase" id="lowercase" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div>
            <div className="option">
              <strong>Números</strong>
              <label className="switch">
                <input onChange={e => setNumbers(e.target.checked)} type="checkbox" name="numbers" id="numbers" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="option">
              <strong>Simbolos</strong>
              <label className="switch">
                <input onChange={e => setSymbols(e.target.checked)} type="checkbox" name="symbols" id="symbols" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        {
          !havePassword ?
            <div className="area-password">
              <span className="myPassword" id="passwordText" >Sua senha aparecerá aqui!</span>
            </div>
            :
            <>
              <div className="area-password">
                <span className="myPassword" id="passwordText" >{password}</span>
                <button onClick={copyPassword}><FiClipboard size={20} color='white' /></button>
              </div>
            <div className="area-save-password">
                <input type="text" placeholder="Salvar senha!" />
                <button onClick={savePassword}><FaRegSave size={20} color='white' /></button>
            </div>
            </>
        }

        {isChecked() ?
          <button onClick={() => generatePassword(lengthPassword, numbers, symbols, lowercase, uppercase)}>Gerar Senha</button>
          :
          <strong>Marque pelo menos uma opção de configuração de senha!</strong>
        }

      </div>
    </div>
  )
}