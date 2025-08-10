import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
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

// 마이페이지 관련 컴포넌트 임포트
import MyPageLayout from './components/MyPageLayout';
import MyPageSidebar from './components/MyPageSidebar';
import Profile from './pages/mypage/Profile';
import MemberPageSetting from './pages/mypage/MemberPageSetting';
import MyStudies from './pages/mypage/MyStudies';
import MyTeams from './pages/mypage/MyTeams';

// 관리자 페이지 관련 컴포넌트 임포트
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminMainContent from './pages/admin/AdminMainContent';
import AdminRecruitment from './pages/admin/AdminRecruitment';
import AdminAnnouncement from './pages/admin/AdminAnnouncement';


// 모든 로직을 AppContent 컴포넌트로 이동
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header && !location.pathname.startsWith('/mypage') && !location.pathname.startsWith('/admin')) {
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

  const isNonCommonLayout = location.pathname.startsWith('/mypage') || location.pathname.startsWith('/admin');

  return (
    <div className="App">
      {!isNonCommonLayout && <Header />}
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
        
        {/* 마이페이지 중첩 라우트 */}
        <Route path="/mypage" element={<MyPageLayout />}>
            <Route index element={<Profile />} />
            <Route path="settings" element={<MemberPageSetting />} />
            <Route path="studies" element={<MyStudies />} />
            <Route path="teams" element={<MyTeams />} />
        </Route>

        {/* Admin Pages (중첩 라우트) */}
        <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="main" element={<AdminMainContent />} />
            <Route path="recruitment" element={<AdminRecruitment />} />
            <Route path="announcement" element={<AdminAnnouncement />} />
        </Route>
      </Routes>
      {!isNonCommonLayout && <Footer />}
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