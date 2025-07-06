import React from 'react';
import { Container } from '../../../components/Container';
import style from './WhyMe.module.scss';
import line from '../../../assets/images/line2.svg';
import photo from '../../../assets/images/oksana-s-w.png';

export const WhyMe = () => {
  return (
    <Container>
      <section id='me' className={style.sectionWhyMe}>
        <span className={style.sectionLabel}>
          <h3 style={{ color: '#5b565e', fontWeight: '800', fontSize: '1.5rem' }}>Warum ich?</h3>
          <img className={style.image} src={line} alt='underline' />
        </span>
        <div className={style.whyMe}>
          <img src={photo} alt="photo-khegai" />
          <div>
            <p>Ganz einfach! Weil ich als anfangs Austauschstudentin auch von Null auf diese Sprache mit all ihren Facetten lernen durfte.</p>
            <p>Meine ganz eigenen Erfahrungen im Erlernen der deutschen Sprache und die Empathie lassen mich ganz intuitiv und angepasst auf die jeweilige Person und deren individuelle Lerngeschwindgkeit, sprachliche Defizite erkennen, um diese im 2. Schritt mit Spaß beim Lernen abzustellen.</p>
          </div>
        </div>

      </section>
    </Container>
  )
}
