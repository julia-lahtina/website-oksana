import { useEffect, useState } from 'react';
import style from './Header.module.scss';
import logo from '../../assets/images/Logo-oksana-khegai-seite.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import underline from '../../assets/images/line2.svg';

export const Header = () => {
  const [menu, setMenu] = useState('welcome');

  const items = [
    { text: 'Startseite', link: 'welcome' },
    { text: 'Über mich', link: 'about' },
    { text: 'Warum ich?', link: 'me' },
    { text: 'Deutsch & Ich', link: 'german' },
    { text: 'Meinungen', link: 'testimony' },
    { text: 'Kontakt', link: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = menu;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 100) {
          current = section.id;
        }
      });

      setMenu(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <img src={logo} alt="logo-oksana-khegai" />
      <ul>
        {items.map(item => (
          <AnchorLink
            key={item.text}
            className={style.anchorLink}
            offset={90}
            href={`#${item.link}`}
          >
            <li className={style.menuItem}>
              <p onClick={() => setMenu(item.link)}>{item.text}</p>
              {menu === item.link && (
                <img src={underline} alt="underline" className={style.underline} />
              )}
            </li>
          </AnchorLink>
        ))}
      </ul>
      <button type="button" className={style.navContactButton}>Kontaktieren Sie mich</button>
    </header>
  );
};
