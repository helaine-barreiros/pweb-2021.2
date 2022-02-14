import React from 'react';
import styles from './Header.module.css';
import Logo from '../../../images/logo.png'

export const Header = () => {
  return (
    <div className={styles.containerHeader}>
    <div className={styles.body}>
      <div>
        <img src={Logo} alt="logo" width='15px' />
        <strong>Gerador de Senhas</strong>
      </div>
      <div>
        <strong>...</strong>
      </div>
    </div>
    </div>
  )
}