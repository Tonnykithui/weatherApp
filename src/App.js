import './App.css';

import { Route, Routes } from 'react-router-dom';
import Weather from './components/weather/Weather';


function App() {
  const pp = '9ebd0651154caf443bd14e66b49154c5';
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
