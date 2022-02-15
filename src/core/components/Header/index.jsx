import React from 'react';
import styles from './Header.module.css';
import Logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.body}>
        <div>
          <Link to='/' >
            <img src={Logo} alt="logo" width='15px' />
            <strong>Gerador de Senhas</strong>
          </Link>
        </div>
        <div>
          <nav>
            <ul>
              <li><Link to='senhas' >Minhas Senhas</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}