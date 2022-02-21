import React from 'react'
import { FiClipboard, TiArrowBack } from 'react-icons/all'
import { Link } from 'react-router-dom';
import './MyPasswords.css'

export const Mypasswords = () => {

  const copyLink = async () => {
    await navigator.clipboard.writeText('copia');
    alert('Senha Copiada!')
  }

  const listPasswords = [{
    label: 'Instragram',
    password: 'minhasenha123@'
  },
  {
    label: 'Facebook',
    password: 'Senha123@'
  },
  {
    label: 'Linkedln',
    password: 'Senha122222223@'
  }
  ]

  return (
    <div className='container-myPasswords'>
      <div className='content-myPasswords'>

        <div className='header'>
          <Link to='/'>
            <button><TiArrowBack /></button>
          </Link>
          <h2>Minhas senhas</h2>
        </div>

        {
          listPasswords.map(password => (
            <div className="my-password">
              <div>
                <label>{password.label}</label>
                <span>{password.password}</span>
              </div>
              <button onClick={copyLink}><FiClipboard /></button>
            </div>
          ))
        }

      </div>
    </div>
  )
}
