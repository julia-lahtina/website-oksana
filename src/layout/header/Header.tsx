import style from './Header.module.scss';
import logo from '../../assets/images/Logo-oksana-khegai-seite.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import underline from '../../assets/images/line2.svg';
import { useState } from 'react';

export const Header = () => {

  const [menu, setMenu] = useState('welcome')
  const items = [
    {text: 'Startseite', link: 'welcome'},
    {text: 'Über mich', link: 'about'},
    {text: 'Warum ich?', link: 'me'}, 
    {text: 'Deutsch & Ich', link: 'german'}, 
    {text: 'Meinungen', link: 'testimony'}, 
    {text: 'Kontakt', link: 'contact'}
  ];

  return (
      <header>
        <img src={logo} alt="logo-oksana-khegai" />
        <ul>
          {items.map(item => (
            <AnchorLink key={item.text} className={style.anchorLink} offset={50} href={`#${item.link}`}>
              <li className={style.menuItem}><p onClick={() => setMenu(item.link)}>{item.text}</p>{menu === item.link ? <img src={underline} alt='underline' className={style.underline}/> : ''}</li>
            </AnchorLink>
          ))}
        </ul>
        <button type='button' className={style.navContactButton}>Kontaktieren Sie mich</button>
      </header>
  )
}
