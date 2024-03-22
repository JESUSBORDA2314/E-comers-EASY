import logo from './logo.svg';
import './App.css';
import Navigation from './custom/components/navigation/Navigation';
import HomePage from './custom/components/pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div className="">
      <HomePage/>
      </div>
    </div>
  );
}

export default App;
