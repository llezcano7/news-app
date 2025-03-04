import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import News from './components/News';
import './reset.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navbar />}/>
      <Route path="/News" element={<News />}/>
    </Routes>
  )
}

export default App
