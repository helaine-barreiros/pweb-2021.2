import React from "react";
import Logo from '../../images/logo.png'
import './Home.css'

export const HomePage = () => {
  return (
    <div className="container-home">
      <div className="content">
        <img src={Logo} alt="logo" />
        <h1>Gerador de Senhas</h1>
        <p>Gere senhas fortes para sua segurança!</p>

        <div className="options">

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

        <button>Gerar Senha</button>

      </div>
    </div>
  )
}
