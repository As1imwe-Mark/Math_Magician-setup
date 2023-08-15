import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import Navbar from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
