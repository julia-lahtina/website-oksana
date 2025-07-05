import React from 'react';
import { Container } from '../../../components/Container';
import style from './Contact.module.scss';

export const Contact = () => {
  return (
    <Container>
        <section id='contact' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h3>Kontakt</h3>
            <div className={style.contactForm}>
                <input type="text" />
                <input type="text" />
                <input type="email" />
                <input type="text" />
                <button type='button'>Lassen Sie uns ins Gespräch kommen</button>
            </div>
        </section>
    </Container>
  )
}
