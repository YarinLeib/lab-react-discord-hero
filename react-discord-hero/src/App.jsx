import './App.css';
import { SiteHeader } from './components/SiteHeader';
import { Intro } from './components/Intro';
import { DownloadButton } from './components/DownloadButton';
import { BrowserButton } from './components/BrowserButton';

function App() {
  return (
    <div className='App'>
      <SiteHeader />
      <Intro />
      <DownloadButton />
      <BrowserButton />
    </div>
  );
}

export default App;
