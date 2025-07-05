import React from 'react';
import { Container } from '../../../components/Container';
import style from './Welcome.module.scss';
import mainImg from '../../../assets/images/main-img.png';

export const Welcome = () => {
  return (
    <Container>
      <section id='welcome' style={{marginTop: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', backgroundColor: '#fffafe'}}>
        <img src={mainImg} alt="main-image" className={style.mainImage}/>
        <div style={{color: '#5b565e', fontSize: '3.5rem', fontWeight: '600'}}>Willkommen!</div>
        <div className={style.text}><span className={style.name}>Ich bin Oksana Khegai</span> - Ihre Sprachdozentin</div>
        <button style={{backgroundColor: '#969fdb', color: '#ffff', padding: '14px 32px', borderRadius: '50px', fontSize: '1rem'}}>Mehr erfahren</button>
      </section>
    </Container>
  )
}
