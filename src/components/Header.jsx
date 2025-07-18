import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // useLocation 임포트
import logo from '../logo.svg';

function Header() {
  const location = useLocation(); // 현재 URL 위치 정보 가져오기

  // 주어진 path가 현재 경로와 일치하는지 확인하는 헬퍼 함수
  const isActive = (path) => {
    // '/home' 대신 '/'를 사용하므로, '/' 경로일 때는 '/home'으로 간주하지 않습니다.
    // 하지만, 메인 페이지 '/'는 특별히 처리하여 다른 모든 경로가 아닐 때 활성화되도록 할 수 있습니다.
    // 여기서는 정확히 일치하는 경로만 활성화합니다. (e.g., /about만 About 활성화)
    // 메인 페이지인 '/'는 다른 경로가 아니면 활성화되도록 특별 처리합니다.
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10">
              <img src={logo} alt="TCP 로고" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="orbitron text-xl font-bold gradient-text text-left">TCP</h1>
              <p className="text-xs text-gray-400 text-left">Team Crazy Performance</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            {/* isActive 헬퍼 함수를 사용하여 조건부 클래스 적용 */}
            <Link to="/about" className={`nav-link orbitron text-sm font-medium ${isActive('/about') ? 'active' : 'text-gray-300'} hover:text-white`}>About</Link>
            <Link to="/members" className={`nav-link orbitron text-sm font-medium ${isActive('/members') ? 'active' : 'text-gray-300'} hover:text-white`}>Members</Link>
            <Link to="/recruitment" className={`nav-link orbitron text-sm font-medium ${isActive('/recruitment') ? 'active' : 'text-gray-300'} hover:text-white`}>Recruitment</Link>
            <Link to="/announcement" className={`nav-link orbitron text-sm font-medium ${isActive('/announcement') ? 'active' : 'text-gray-300'} hover:text-white`}>Announcement</Link>
            <Link to="/study" className={`nav-link orbitron text-sm font-medium ${isActive('/study') ? 'active' : 'text-gray-300'} hover:text-white`}>Study</Link>
            <Link to="/team" className={`nav-link orbitron text-sm font-medium ${isActive('/team') ? 'active' : 'text-gray-300'} hover:text-white`}>Find Your Team</Link>
          </nav>

          {/* Login/Sign Up Links - 별도의 스타일 적용 (nav-link 아님) */}
          <div className="flex space-x-3">
            <Link to="/login" className={`px-4 py-2 text-sm border ${isActive('/login') ? 'border-gray-400 text-white' : 'border-gray-600 text-gray-300'} rounded-lg hover:border-gray-400 transition-colors`}>Login</Link>
            <Link to="/register" className={`px-4 py-2 text-sm rounded-lg transition-colors 
                ${isActive('/register') ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gradient-to-r from-blue-500 to-purple-500'} 
                hover:from-blue-600 hover:to-purple-600 text-white`}>Sign Up</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <i className="fas fa-bars text-white"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;