// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import './App.css';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
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
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminMainContent from './pages/admin/AdminMainContent';
import AdminRecruitment from './pages/admin/AdminRecruitment';

// 모든 로직을 AppContent 컴포넌트로 이동
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header && !location.pathname.startsWith('/admin')) {
        if (window.scrollY > 50) {
          header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
          header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isNonAdminLayout = location.pathname.startsWith('/admin');

  return (
    <div className="App">
      {!isNonAdminLayout && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/announcement/write" element={<AnnouncementWrite />} />
        <Route path="/announcement/:id" element={<AnnouncementArticle />} />
        <Route path="/study" element={<Study />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Admin Pages (중첩 라우트) */}
        <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="main" element={<AdminMainContent />} />
            <Route path="recruitment" element={<AdminRecruitment />} />
        </Route>
      </Routes>
      {!isNonAdminLayout && <Footer />}
    </div>
  );
}

// App 컴포넌트는 Router만 렌더링
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;