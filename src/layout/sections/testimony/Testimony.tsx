import React from 'react';
import { Container } from '../../../components/Container';
import line from '../../../assets/images/white-line.svg';
import style from './Testimony.module.scss';
import Slider from 'react-slick';

export const Testimony = () => {

  const testimonialData = [
    {
      id: 1,
      name: 'Elena Cristea (Rumänien)',
      text: 'Guten Tag, ich habe gerade meinen C1 Zertifikat erhalten und habe bestanden . Ich bedanke mich ganz, ganz herzlich bei Ihnen für Ihre Unterstützung und Hilfe. Sie sind eine von der besonderen Personen,  die auf meinen Weg begleitet haben. Ich bin so froh Sie kennengelern zu haben. Liebe Grüße',
      delay: 0.5
    },
    {
      id: 1,
      name: 'Areig E. (Apothekerin, Libyen)',
      text: 'Mein kostbare Lehrerin von Ihnen habe ich gelernt, Opfer, Hingabe und Glauben, und Ihr Glaube, dass Unmöglichkeit nur ein Wort sei. Obwohl ich viel Schwierigkeiten gehabt habe, konnte ich weiter machen Danke Ich habe meine Prüfung bestanden , da Sie mir immer nicht nur die Sprache beigebracht haben, sondern wie die Menschen starke bleiben und das die immer Hoffnung gibt. Wir bedanken uns bei Ihnen für Ihre Motivation und Ihre Mühe. Ich wünsche Ihnen viel Glück in Ihr Leben.',
      delay: 0.8
    },
    {
      id: 1,
      name: 'Liza A. (Allgemeinärztin, Georgien)',
      text: 'Ich habe heute endlich meine Fachsprachenprüfung bestanden. Ich bedanke mich für Ihre Hilfe, denn ohne Ihre Hilfe hätte ich das nicht geschafft. Ich hatte sehr viel Spaß in ihrem Unterricht und habe viele Sachen gelernt. Ich bin Ihnen sehr dankbar für die viele Mühe die Sie sich gegeben haben. Ich wünsche Ihnen weiterhin viel Erfolg.',
      delay: 1.1
    }
  ]

  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  }

  return (
    <Container>
      <section id='testimony' style={{ backgroundColor: '#a6afde', padding: '30px' }}>
        <div >
          <span className={style.sectionLabel}>
            <h3 style={{ color: '#ffff', fontWeight: '800', fontSize: '1.5rem' }}>Meinungen meiner Schüler:innen</h3>
            <img className={style.image} src={line} alt='underline' />
          </span>
          <div style={{ color: '#ffff', fontWeight: '700', fontSize: '1.2rem', textAlign: 'center', marginBottom: '20px' }}>Das macht den Unterschied.</div>

          <Slider {...settings}>
            {
              testimonialData.map(item => {
                return (
                  <div key={item.id}>
                    <div className={style.testimonyCard}>
                      <span>⭐⭐⭐⭐⭐</span>
                      <p>{item.text}</p>
                      <span>{item.name}</span>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </section>
    </Container>
  )
}
