import React from 'react';
import friends from '../assets/friends.png';
import '../App.css';
export function BrowserButton() {
  return (
    <div className='browser-container'>
      <div className='black-button'>
        <p>Open Discord in your browser</p>
      </div>
      <img src={friends} alt='Menu Icon' className='friends' />
    </div>
  );
}
