import React from 'react';
import { Container } from '../../../components/Container';
import style from './Contact.module.scss';
import line from '../../../assets/images/line2.svg';
import locationIcon from '../../../assets/images/location_icon.svg';
import emailIcon from '../../../assets/images/mail_icon.svg';

export const Contact = () => {
  return (
    <Container>
      <section id='contact' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <span className={style.sectionLabel}>
          <h3 style={{ color: '#5b565e', fontWeight: '800', fontSize: '1.5rem' }}>Kontakt</h3>
          <img className={style.image} src={line} alt='underline' />
        </span>

        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
            <span className={style.text}>LASSEN SIE UNS SPRECHEN</span>
            <span className={style.text2}>Möchten Sie mit mir Deutsch lernen oder brauchen Sie eine Sprachdozentin für Ihre Schule?</span>
            <img src={emailIcon} alt="email-icon" /> <span>oksana@gmail.com</span>
            <img src={locationIcon} alt="locationIcon" /> <span>Dresden, Deutschland</span>
          </div>

          <form className={style.contactForm}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Geben Sie bitte Ihren Vor- und Nachnamen ein...' name='name' />
            <label htmlFor="email">E-Mail</label>
            <input type="email" placeholder='E-Mail' name='email' />
            <label htmlFor="message">Nachricht</label>
            <textarea name='message' rows={10} placeholder='Schreiben Sie mir eine Nachricht...' />
            <button type='submit' className={style.button}>Lassen Sie uns ins Gespräch kommen</button>
          </form>
        </div>

      </section>
    </Container>
  )
}
