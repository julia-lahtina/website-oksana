import React from 'react';
import { Container } from '../../../components/Container';
import style from './GermanForMe.module.scss';
import line from '../../../assets/images/line2.svg';
import { motion } from 'framer-motion';

export const GermanForMe = () => {
  return (
    <Container>
      <section id='german' className={style.sectionGermaForMe}>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className={style.sectionLabel}>
              <h3 style={{ color: '#5b565e', fontWeight: '800', fontSize: '1.5rem' }}>Was ist für mich die deutsche Sprache?</h3>
              <img className={style.image} src={line} alt='underline' />
            </span>
            <div className={style.germanForMe}>
              <p>Für mich ist Deutsch eine „technische“ Sprache, deren Grammatik man in so eine Art „Formeln“  verwandeln kann, um die Grundlagen leichter und besser zu verstehen.</p>
              <p>Außerdem sehe ich das Erlernen einer Sprache als das Bauen eines Hauses.</p>
              <p>Womit fängt man beim Hausbau an? Bestimmt nicht mit einem Dach, sondern mit einer Bodenplatte als Fundament. In einer Sprache sind das die Grundlagen: Artikel: der, die, das; Fälle: Genitiv, Dativ, Akkusativ und die grammatikalischen „Formeln“. Erst dann werden die Wände hochgezogen: eine Wand könnte z.B. „Passiv“, die andere „Partizipien“ usw. sein. Und zum Schluss wird das Dach gedeckt, mit z.B. Nomen-Verb-Verbindungen, Redewendungen bzw. „subjektiver Bedeutung der Modalverben“.</p>
              <p>Am Ende hängt alles davon ab, wie fest und stark die Bodenplatte ist, damit das neu gebaute Haus viele-viele Jahre bei jedem Unwetter bestehen bleibt.</p>
              <p>Also, lasst uns ein neues Haus bauen!  …entspannt und mit viel Spaß.</p>
            </div>

          </div>
        </motion.div>

      </section>
    </Container>
  )
}
