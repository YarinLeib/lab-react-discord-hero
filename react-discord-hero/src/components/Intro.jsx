import background from '../assets/discord-background.png';
import '../App.css';

export function Mainsection() {
  return (
    <div className="main-section">
      <h1>
        IMAGINE A <br />
        PLACE...
      </h1>
      <p className="description">
        ...where you can belong to a school club, a gaming group, or a <br />
        worldwide art community. Where just you and a handful of <br />
        friends can spend time together. A place that makes it easy to <br />
        talk every day and hang out more often.
      </p>
      <div className="mac-button">Download for Mac</div>
      <div className="browser-button">Open Discord in your browser</div>
      <div>
        <img src={background} alt="Background" className="background-img" />
      </div>
    </div>
  );
}
