import React from 'react';
import styles from './Footer.module.css';
import BrasaoUPE from '../../../images/brasaoUPE.png'
import LogoUPE from '../../../images/logoUPE.png'

export const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.body}>
        <strong>	&#169; Disciplina de Prograamação Web III</strong>
        <div className={styles.logos}>
          <img src={LogoUPE} alt="logoUPE" height='25px' />
          <img src={BrasaoUPE} alt="logoUPE" height='25px' />
        </div>
      </div>
    </div>
  )
}