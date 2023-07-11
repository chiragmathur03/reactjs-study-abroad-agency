import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Blogs from './pages/Blogs';
import Error from './pages/Error';
import Connect from './pages/Connect';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/about' element={<About /> } />  
        <Route path='/programs' element={<Programs /> } />
        <Route path='/blogs' element={<Blogs /> } />
        <Route path='/connect' element={<Connect /> } />
        <Route path='*' element={<Error /> } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
