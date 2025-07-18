import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router 돔 임포트
import './App.css'; // 기존 App.css는 필요에 따라 유지하거나 제거
import './index.css'; // 전역 CSS 임포트

// 공통 컴포넌트 임포트
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Recruitment from './pages/Recruitment';
import Announcement from './pages/Announcement';
import Study from './pages/Study';
import Team from './pages/Team';
import Login from './pages/Login';
import Register from './pages/Register'; // 회원가입 페이지 임포트

function App() {
  // Header background on scroll 로직은 App.js에 그대로 둡니다.
  // 이 로직은 모든 페이지에서 공통적으로 헤더에 적용되어야 하기 때문입니다.
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
    <Router> {/* BrowserRouter로 전체 앱을 감쌉니다. */}
      <div className="App">
        <Header /> {/* 모든 페이지에 공통으로 나타나는 헤더 */}

        <Routes> {/* 라우트들을 정의하는 부분 */}
          <Route path="/" element={<Home />} /> {/* 메인 페이지 */}
          <Route path="/about" element={<About />} /> {/* About 페이지 */} 
          <Route path="/members" element={<Members />} /> {/* Members 페이지 */}
          <Route path="/recruitment" element={<Recruitment />} /> {/* Recruitment 페이지 */}
          <Route path="/announcement" element={<Announcement />} /> {/* Announcement 페이지 */}
          <Route path="/study" element={<Study />} /> {/* Study 페이지 */}
          <Route path="/team" element={<Team />} /> {/* Find Your Team 페이지 */}
          <Route path="/login" element={<Login />} /> {/* Login 페이지 */}
          <Route path="/register" element={<Register />} /> {/* Register 페이지 */}
        </Routes>

        <Footer /> {/* 모든 페이지에 공통으로 나타나는 푸터 */}
      </div>
    </Router>
  );
}

export default App;