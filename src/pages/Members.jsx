import React, { useEffect } from 'react';
import logo from '../logo.svg';

function Members() {
  useEffect(() => {
    // 스크롤 이벤트에 따라 요소가 뷰포트에 들어오면 애니메이션을 적용하기 위한 IntersectionObserver 설정
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    // IntersectionObserver 인스턴스 생성
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // 요소가 뷰포트에 들어왔을 때 'visible' 클래스를 추가하여 애니메이션을 실행
          observer.unobserve(entry.target); 
        } else {
        }
      });
    }, observerOptions);

    // 모든 .scroll-fade 요소 관찰
    const scrollFadeElements = document.querySelectorAll('.scroll-fade');
    scrollFadeElements.forEach((el) => {
      observer.observe(el);
    });

    // 컴포넌트 언마운트 시 클린업
    return () => {
      // 컴포넌트가 언마운트될 때 모든 관찰을 중지
      observer.disconnect(); 
    };
  }, []); // 빈 배열을 두어 컴포넌트 마운트 시 한 번만 실행

  return (
    <>
      <section className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-green-400 flex items-center justify-center">
                <i className="fas fa-users text-white text-3xl"></i>
              </div>
              <h1 className="orbitron text-5xl md:text-7xl font-black mb-4">
                <span className="gradient-text">TCP Members</span>
              </h1>
              <p className="orbitron text-xl md:text-2xl text-gray-300 mb-6">Team Crazy Performance의 빛나는 얼굴들</p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                TCP를 함께 만들어가는 열정적인 멤버들을 소개합니다. 각자의 분야에서 최고의 퍼포먼스를 보여주고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="current-members" className="py-16 bg-gradient-to-b from-transparent to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="orbitron text-3xl md:text-4xl font-bold gradient-text mb-4">활동 멤버</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              현재 TCP에서 활발히 활동하며 동아리의 성장을 이끌고 있는 멤버들입니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <div className="scroll-fade member-card p-6 rounded-xl text-center card-hover">
                  <div className="img-container mx-auto">
                      <img src="https://via.placeholder.com/120/A8C5E6/FFFFFF?text=Member1" alt="Member 1 Profile" />
                  </div>
                  <h3 className="orbitron text-xl font-bold mb-2 text-white">김민준</h3>
                  <p className="text-blue-300 mb-2">프론트엔드 개발자</p>
                  <p className="text-sm text-gray-400">웹 인터페이스 디자인 및 개발 전문</p>
                  <div className="flex justify-center space-x-4 mt-4">
                      <a href="https://github.com/kimminjun" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400"><i className="fab fa-github"></i></a>
                      <a href="https://portfolio.kimminjun.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400"><i className="fas fa-link"></i></a>
                  </div>
              </div>

              <div className="scroll-fade member-card p-6 rounded-xl text-center card-hover">
                  <div className="img-container mx-auto">
                      <img src="https://via.placeholder.com/120/C5A8E6/FFFFFF?text=Member2" alt="Member 2 Profile" />
                  </div>
                  <h3 className="orbitron text-xl font-bold mb-2 text-white">이서연</h3>
                  <p className="text-purple-300 mb-2">백엔드 개발자</p>
                  <p className="text-sm text-gray-400">서버 및 데이터베이스 시스템 구축</p>
                  <div className="flex justify-center space-x-4 mt-4">
                      <a href="https://github.com/leeseoyeon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400"><i className="fab fa-github"></i></a>
                      <a href="https://portfolio.leeseoyeon.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400"><i className="fas fa-link"></i></a>
                  </div>
              </div>

              <div className="scroll-fade member-card p-6 rounded-xl text-center card-hover">
                  <div className="img-container mx-auto">
                      <img src="https://via.placeholder.com/120/A8E6C5/FFFFFF?text=Member3" alt="Member 3 Profile" />
                  </div>
                  <h3 className="orbitron text-xl font-bold mb-2 text-white">박지훈</h3>
                  <p className="text-green-300 mb-2">데이터 과학자</p>
                  <p className="text-sm text-gray-400">데이터 분석 및 인공지능 모델 개발</p>
                  <div className="flex justify-center space-x-4 mt-4">
                      <a href="https://github.com/parkjihun" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400"><i className="fab fa-github"></i></a>
                      <a href="https://portfolio.parkjihun.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400"><i className="fas fa-link"></i></a>
                  </div>
              </div>

              <div className="scroll-fade member-card p-6 rounded-xl text-center card-hover">
                  <div className="img-container mx-auto">
                      <img src="https://via.placeholder.com/120/E6A8C5/FFFFFF?text=Member4" alt="Member 4 Profile" />
                  </div>
                  <h3 className="orbitron text-xl font-bold mb-2 text-white">최예원</h3>
                  <p className="text-pink-300 mb-2">모바일 앱 개발자</p>
                  <p className="text-sm text-gray-400">iOS/Android 애플리케이션 개발</p>
                  <div className="flex justify-center space-x-4 mt-4">
                      <a href="https://github.com/choiyewon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400"><i className="fab fa-github"></i></a>
                      <a href="https://portfolio.choiyewon.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400"><i className="fas fa-link"></i></a>
                  </div>
              </div>
          </div>
        </div>
      </section>

      <section id="alumni-members" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="orbitron text-3xl md:text-4xl font-bold gradient-text mb-4">졸업생 및 전 멤버</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              TCP의 발전에 기여하고 현재 성공적인 커리어를 이어가고 있는 졸업생 및 전 멤버들입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <div className="scroll-fade member-card p-6 rounded-xl text-center card-hover">
                  <div className="img-container mx-auto">
                      <img src="https://via.placeholder.com/120/D8BFD8/FFFFFF?text=Alumni1" alt="Alumni 1 Profile" />
                  </div>
                  <h3 className="orbitron text-xl font-bold mb-2 text-white">김명수</h3>
                  <p className="text-gray-400 mb-2">초대 회장 | 프론트엔드 개발자</p>
                  <p className="text-sm text-gray-400">졸업 후 [회사명] 재직 중</p>
                  <div className="flex justify-center space-x-4 mt-4">
                      <a href="https://github.com/kimmyungsoo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400"><i className="fab fa-github"></i></a>
                      <a href="https://link.kimmyungsoo.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400"><i className="fas fa-link"></i></a>
                  </div>
              </div>

              <div className="scroll-fade member-card p-6 rounded-xl text-center card-hover">
                  <div className="img-container mx-auto">
                      <img src="https://via.placeholder.com/120/A8D8D8/FFFFFF?text=Alumni2" alt="Alumni 2 Profile" />
                  </div>
                  <h3 className="orbitron text-xl font-bold mb-2 text-white">박은지</h3>
                  <p className="text-gray-400 mb-2">부회장 | 데이터 과학자</p>
                  <p className="text-sm text-gray-400">졸업 후 [회사명] 재직 중</p>
                  <div className="flex justify-center space-x-4 mt-4">
                      <a href="https://github.com/parkeunji" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400"><i className="fab fa-github"></i></a>
                      <a href="https://link.parkeunji.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400"><i className="fas fa-link"></i></a>
                  </div>
              </div>

              <div className="scroll-fade member-card p-6 rounded-xl text-center card-hover">
                  <div className="img-container mx-auto">
                      <img src="https://via.placeholder.com/120/E6C5A8/FFFFFF?text=Alumni3" alt="Alumni 3 Profile" />
                  </div>
                  <h3 className="orbitron text-xl font-bold mb-2 text-white">최현우</h3>
                  <p className="text-gray-400 mb-2">활동 멤버 | 백엔드 개발자</p>
                  <p className="text-sm text-gray-400">졸업 후 [회사명] 재직 중</p>
                  <div className="flex justify-center space-x-4 mt-4">
                      <a href="https://github.com/choihyunwoo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400"><i className="fab fa-github"></i></a>
                      <a href="https://link.choihyunwoo.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400"><i className="fas fa-link"></i></a>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Members;