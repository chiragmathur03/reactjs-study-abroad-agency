import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Blogs from './pages/Blogs';
import Error from './pages/Error';
import Connect from './pages/Connect';
import BlogPost from './components/BlogPost';
import Company from './pages/Company';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import ScrollToTop from './pages/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Company />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/post' element={<BlogPost />} />
        <Route path='/connect' element={<Connect />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
