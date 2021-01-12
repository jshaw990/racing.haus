import Construction from './components/construction/construction'
import Header from './components/header/header'
import Footer from './components/footer/footer'

import CarList from './components/car-list/car-list'

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header /> 
      <Construction />
      <Footer />
      <CarList />
    </div>
  );
}

export default App;
