import React from 'react';
import discordLogo from '../assets/discord-logo.png';
import lines from '../assets/3-lines.png';
import '../App.css';

export function SiteHeader() {
  return (
    <header className='site-header'>
      <div className='header-top'>
        <img src={discordLogo} alt='Discord Logo' className='logo' />
        <img src={lines} alt='Menu Icon' className='menu-icon' />
      </div>
      <h1 className='header-title'>
        IMAGINE A<br /> PLACE...
      </h1>
    </header>
  );
}
