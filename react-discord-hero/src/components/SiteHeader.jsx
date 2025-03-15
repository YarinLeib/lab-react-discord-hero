import discordLogo from '../assets/discord-logo.png';
import lines from '../assets/3-lines.png';

export function SiteHeader() {
  return (
    <header>
      <div className='header-top'>
        <img src={discordLogo} alt='Discord Logo' className='logo' />
        <button id='MenuButton'>
          <img src={lines} alt='Menu' className='menu-icon' />
        </button>
      </div>
    </header>
  );
}
