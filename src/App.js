import crane from './assets/crane.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={crane} className='crane' alt='under construction'/>
      <div>
        <span>This website is currently under construction!<br/> Please check back soon!</span>
      </div>
    </div>
  );
}

export default App;
