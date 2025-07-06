import React from 'react';
import { Container } from '../../../components/Container';
import style from './Contact.module.scss';
import line from '../../../assets/images/line2.svg';

export const Contact = () => {
  return (
    <Container>
      <section id='contact' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <span className={style.sectionLabel}>
          <h3 style={{ color: '#5b565e', fontWeight: '800', fontSize: '1.5rem' }}>Kontakt</h3>
          <img className={style.image} src={line} alt='underline' />
        </span>
        <span>LASSEN SIE UNS SPRECHEN</span>
        <span>Möchten Sie mit mir Deutsch lernen oder brauchen Sie eine Sprachdozentin für Ihre Schule?</span>
        <form className={style.contactForm}>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Geben Sie bitte Ihren Vor- und Nachnamen ein...' name='name' />
          <label htmlFor="email">E-Mail</label>
          <input type="email" placeholder='E-Mail' name='email' />
          <label htmlFor="message">Nachricht</label>
          <textarea name='message' rows={10} placeholder='Schreiben Sie mir eine Nachricht...' />
          <button type='submit' className={style.button}>Lassen Sie uns ins Gespräch kommen</button>
        </form>
      </section>
    </Container>
  )
}
