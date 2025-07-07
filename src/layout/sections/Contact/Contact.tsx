import React, { type FormEvent } from 'react';
import { Container } from '../../../components/Container';
import style from './Contact.module.scss';
import line from '../../../assets/images/line2.svg';
import locationIcon from '../../../assets/images/location_icon.svg';
import emailIcon from '../../../assets/images/mail_icon.svg';

export const Contact = () => {

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "c6a799a3-97cb-476c-97cd-05213e9f16d5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

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
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '30px' }}>
              <img src={emailIcon} alt="email-icon" style={{ width: '30px', height: '30px' }} /> <span className={style.infoText}>oksana.khegai@icloud.com</span>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '20px' }}>
              <img src={locationIcon} alt="locationIcon" style={{ width: '30px', height: '30px' }} /> <span className={style.infoText}>Dresden, Deutschland</span>
            </div>
          </div>

          <form onSubmit={onSubmit} className={style.contactForm}>
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
