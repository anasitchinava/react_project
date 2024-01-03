import icon from '../assets/portfolio-icon.png';
import '../styles/App.css';

function App() {
  return (
    <div className='Center'>
        <img src={icon} className="App-logo" alt="portfolio-icon" />
        <ul>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
        <p className='Main-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis lobortis gravida. 
          Aenean sapien turpis, vulputate nec erat vel, blandit mattis eros. 
          Morbi aliquam ipsum nec enim porttitor vulputate eu quis lacus.
        </p>
    </div>
  );
}

export default App;
