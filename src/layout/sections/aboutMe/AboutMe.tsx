import React from 'react';
import { Container } from '../../../components/Container';
import style from './AboutMe.module.scss';
import line from '../../../assets/images/line2.svg';
import { motion } from 'framer-motion';

export const AboutMe = () => {
  return (
    <Container>

      <section id='about' className={style.sectionAboutMe}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className={style.sectionLabel}>
              <h3 style={{ color: '#5b565e', fontWeight: '800', fontSize: '1.5rem' }}>Über mich</h3>
              <img className={style.image} src={line} alt='underline' />
            </span>

            <div className={style.aboutMe}>
              <h3>Deutsch lernen? Individuell, einfach und mit viel Spaß!</h3>
              <p>Geboren und aufgewachsen bin ich in Sibirien, 1998 bin ich nach Deutschland gekommen, um hier mein zweites BWL-Studium abzuschließen.</p>
              <p>Die deutsche Sprache unterrichte ich freiberuflich an verschiedenen privaten Sprachschulen (Asyl-, Alpha-, DeuFöV-, Intergrations-, BS- sowie Firmen-Kurse) und gebe auch Privatunterricht, soweit es zeitlich möglich ist.</p>
              <p>Des Weiteren bin ich telc zertifizierte Prüferin und Bewerterin auf allen Niveaustufen A1-C2, inkl. DTB, DTZ, telc Medizin/Pflege. </p>
              <p>Vor ein paar Jahren habe ich mich weiterqualifiziert, um internationale medizinische Fachkräfte in der deutschen Sprache zu unterrichten. Seither begleite ich mit großer Begeisterung Humanmediziner, Zahnmediziner, Pharmazeuten, Laboranten und Pflegekräfte mit überdurchschnittlichem Erfolg auf ihrem Weg zur Fachsprachenprüfung.</p>
              <p>Infolge des Pandemiegeschehens unterrichte ich vorwiegend online und habe sämtliche zum Unterricht notwendigen Unterlagen in Eigenregie digitalisiert.</p>
            </div>

          </div>
        </motion.div>



      </section>

    </Container>
  )
}







