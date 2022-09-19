import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Whatwedo from './pages/Whatwedo';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/whatwedo" element={<Whatwedo />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
