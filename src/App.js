import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';

// 공통 컴포넌트 임포트
import Header from './components/Header';
import Footer from './components/Footer';

// 페이지 컴포넌트 임포트
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Recruitment from './pages/Recruitment';
import Announcement from './pages/Announcement';
import AnnouncementWrite from './pages/AnnouncementWrite';
import AnnouncementArticle from './pages/AnnouncementArticle';
import Study from './pages/Study';
import Team from './pages/Team';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) {
          header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
          header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/announcement/write" element={<AnnouncementWrite />} />
          <Route path="/announcement/:id" element={<AnnouncementArticle />} /> {/* articleId 대신 id로 통일 */}
          <Route path="/study" element={<Study />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;