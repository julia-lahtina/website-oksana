import React from 'react';
import { Container } from '../../../components/Container';
import style from './Welcome.module.scss';
import mainImg from '../../../assets/images/main-img.png';
import { motion } from 'framer-motion';

export const Welcome = () => {
  return (
    <Container>
      <section
        id='welcome'
        className={style.welcomeSection}
      >
        <motion.div
          className={style.textBlock}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
        >
          <div style={{ color: '#5b565e', fontSize: '3.5rem', fontWeight: '600' }}>Willkommen!</div>
          <h1 className={style.text}><span className={style.name}>Ich bin Oksana Khegai</span></h1>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'justify', gap: '10px', color: '#5b565e' }}>
            <h3 style={{ color: '#5b565e', marginTop: '20px' }}>Sprachdozentin mit Leidenschaft für Sprachen und interkulturelle Kommunikation.</h3>
            <p>Mit über 9 Jahren Erfahrung im Sprachunterricht unterstütze ich Lernende dabei, ihre Sprachziele effektiv und mit Freude zu erreichen – ganz gleich, ob für den Beruf, den Alltag oder die Prüfungsvorbereitung.</p>
            <span style={{ marginTop: '20px' }}>Was erwartet Sie bei mir?</span>
            <span>- Individuelle Deutschkurse</span>
            <span>- Effektive Prüfungsvorbereitung (z.B. TELC)</span>
            <span>- Sprachtraining für den Beruf</span>
            <span>- Maßgeschneiderte Lernpläne und persönliche Betreuung</span>

            <span style={{ marginTop: '20px', fontWeight: 'bold' }}>Ich freue mich darauf, Sie auf Ihrem Sprachweg zu begleiten!</span>
          </div>

          <button className={style.button}>Mehr erfahren</button>
        </motion.div>

        <motion.img
          src={mainImg}
          alt="main-image"
          className={style.mainImage}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        />
      </section>
    </Container>
  )
}
