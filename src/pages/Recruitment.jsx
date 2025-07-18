import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Recruitment() {
  // 모달의 열림/닫힘 상태를 관리하는 state
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // 스크롤 이벤트에 따라 요소가 뷰포트에 들어오면 애니메이션을 적용하기 위한 IntersectionObserver 설정
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // 한 번 보이면 더 이상 관찰 안 함
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-fade').forEach((el) => {
      observer.observe(el);
    });

    // 컴포넌트 언마운트 시 클린업
    return () => {
      observer.disconnect(); // IntersectionObserver 연결 해제
    };
  }, []); // 빈 배열을 두어 컴포넌트가 처음 마운트 시 한 번만 실행

  // 모달 열기 함수
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // 모달 열렸을 때 스크롤 방지
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // 모달 닫혔을 때 스크롤 복원
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지

    // 개인정보 동의 체크 여부 확인
    const privacyAgreement = document.getElementById('privacyAgreement'); // React에서는 useRef를 사용하는 것이 권장됨, 여기서는 HTML ID를 그대로 사용
    if (!privacyAgreement.checked) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    // 폼 데이터 수집
    const formData = new FormData(e.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    console.log('지원서 데이터:', data);

    // 지원서 제출 시뮬레이션
    alert('지원서가 성공적으로 제출되었습니다! 검토 후 연락드리겠습니다.');

    // 폼 초기화 및 모달 닫기
    e.target.reset(); // 폼 필드 초기화
    closeModal();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center">
                <i className="fas fa-rocket text-white text-3xl"></i>
              </div>
              <h1 className="orbitron text-5xl md:text-7xl font-black mb-4">
                <span className="gradient-text">TCP</span>
              </h1>
              <p className="orbitron text-xl md:text-2xl text-gray-300 mb-6">Team Crazy Performance</p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                서울과학기술대학교 선발형 개발자 동아리 TCP와 함께 실용적이고 창의적인 소프트웨어 프로젝트를 만들어보세요.
              </p>
              <button id="heroApplyBtn" onClick={openModal} className="cta-button px-12 py-4 rounded-full text-lg font-bold orbitron text-white hover:text-black transition-colors">
                <i className="fas fa-rocket mr-2"></i>
                지금 지원하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About TCP 세션 */}
      <section id="about" className="py-16 bg-gradient-to-b from-transparent to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="orbitron text-3xl md:text-4xl font-bold gradient-text mb-4">About TCP</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-6">
                TCP (Team Crazy Performance)는 서울과학기술대학교의 매우 선발적인 개발자 동아리입니다.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                우리는 협업, 스터디, 그리고 실험을 통해 실용적이고 창의적인 소프트웨어 프로젝트를 구축하는 것을 목표로 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 지원자 세션 */}
      <section id="who-should-apply" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="orbitron text-3xl font-bold gradient-text mb-8 text-center">Who Should Apply</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="scroll-fade">
                <div className="feature-card p-8 rounded-2xl">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <i className="fas fa-graduation-cap text-white text-2xl"></i>
                  </div>
                  <h3 className="orbitron text-xl font-bold mb-4 text-blue-300 text-center">모든 서울과기대 학생</h3>
                  <p className="text-gray-300 text-center">
                    서울과학기술대학교의 모든 학생들을 환영합니다. 전공에 관계없이 개발에 대한 열정이 있다면 누구든지 지원할 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="scroll-fade">
                <div className="feature-card p-8 rounded-2xl">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <i className="fas fa-heart text-white text-2xl"></i>
                  </div>
                  <h3 className="orbitron text-xl font-bold mb-4 text-purple-300 text-center">열정적인 학습자</h3>
                  <p className="text-gray-300 text-center">
                    현재 실력 수준보다는 개선하고 성장하려는 열정적인 학습자를 특히 찾고 있습니다. 함께 배우고 발전해나가는 것이 중요합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TCP 활동 세션 */}
      <section id="what-we-do" className="py-16 bg-gradient-to-b from-transparent to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="orbitron text-3xl md:text-4xl font-bold gradient-text mb-8">What We Do</h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* 2024 성과 */}
            <div className="mb-12 scroll-fade">
              <h3 className="orbitron text-2xl font-bold mb-6 text-center text-blue-300">2024 주요 성과</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="achievement-card">
                  <div className="text-center">
                    <i className="fas fa-trophy text-3xl text-yellow-400 mb-4"></i>
                    <h4 className="orbitron font-bold text-lg mb-2">대회 성과</h4>
                    <p className="text-gray-300 text-sm">
                      • ICPC 지역 예선 본선 진출<br/>
                      • 해커톤 대회 3회 수상<br/>
                      • 창업 경진대회 우수상
                    </p>
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="text-center">
                    <i className="fas fa-project-diagram text-3xl text-green-400 mb-4"></i>
                    <h4 className="orbitron font-bold text-lg mb-2">프로젝트 완료</h4>
                    <p className="text-gray-300 text-sm">
                      • 웹 서비스 프로젝트 8개<br/>
                      • 모바일 앱 프로젝트 5개<br/>
                      • AI/ML 프로젝트 3개
                    </p>
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="text-center">
                    <i className="fas fa-briefcase text-3xl text-purple-400 mb-4"></i>
                    <h4 className="orbitron font-bold text-lg mb-2">취업 성과</h4>
                    <p className="text-gray-300 text-sm">
                      • 네이버, 카카오 등 대기업 취업<br/>
                      • 스타트업 창업 2팀<br/>
                      • 인턴십 경험 15명
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2024 스터디 활동 */}
            <div className="scroll-fade">
              <h3 className="orbitron text-2xl font-bold mb-6 text-center text-purple-300">2024 스터디 활동</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="feature-card p-6 rounded-2xl">
                  {/* "기술 스터디" h4 태그 왼쪽 정렬 */}
                  <h4 className="orbitron font-bold text-lg mb-4 text-blue-300 text-left">기술 스터디</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-code text-blue-400"></i>
                      <span>알고리즘 & 자료구조 스터디 (매주 목요일)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-globe text-green-400"></i>
                      <span>웹 개발 스터디 (React, Node.js)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-mobile-alt text-purple-400"></i>
                      <span>모바일 앱 개발 스터디 (Flutter, React Native)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-brain text-pink-400"></i>
                      <span>AI/ML 스터디 (PyTorch, TensorFlow)</span>
                    </li>
                  </ul>
                </div>
                <div className="feature-card p-6 rounded-2xl">
                  {/* "프로젝트 기반 학습" h4 태그 왼쪽 정렬 */}
                  <h4 className="orbitron font-bold text-lg mb-4 text-green-300 text-left">프로젝트 기반 학습</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-users text-blue-400"></i>
                      <span>팀 프로젝트 (4-6명 팀으로 구성)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-calendar-alt text-green-400"></i>
                      <span>월간 프로젝트 발표회</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-user-friends text-purple-400"></i> {/* fas fa-mentoring 대신 fas fa-user-friends 사용. mentoring 아이콘이 없을 수 있습니다. */}
                      <span>선배 멘토링 프로그램</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <i className="fas fa-award text-pink-400"></i>
                      <span>우수 프로젝트 시상 및 포트폴리오 지원</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* 지원 버튼 */}
          <div className="text-center mt-12">
            <button id="sectionApplyBtn" onClick={openModal} className="cta-button px-12 py-4 rounded-full text-lg font-bold orbitron text-white hover:text-black transition-colors">
              <i className="fas fa-rocket mr-2"></i>
              Apply Now
            </button>
            <p className="text-sm text-gray-300 mt-4">
              * 지원 기간: 매 학기 시작 2주 전 ~ 개강 후 1주
            </p>
          </div>
        </div>
      </section>

      {/* 지원서 모달 */}
      {isModalOpen && ( // isModalOpen 상태가 true일 때만 렌더링
        <div id="applicationModal" className="modal active" onClick={(e) => e.target.id === 'applicationModal' && closeModal()}>
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="p-8">
              <h2 className="orbitron text-2xl font-bold gradient-text mb-6 text-center">TCP 지원서</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  {/* 레이블 텍스트 왼쪽 정렬 */}
                  <label htmlFor="name" className="form-label required text-left">이름</label>
                  <input type="text" id="name" name="name" className="form-input" required />
                </div>
                
                <div className="form-group">
                  {/* 레이블 텍스트 왼쪽 정렬 */}
                  <label htmlFor="studentId" className="form-label required text-left">학번</label>
                  <input type="text" id="studentId" name="studentId" className="form-input" required />
                </div>
                
                <div className="form-group">
                  {/* 레이블 텍스트 왼쪽 정렬 */}
                  <label htmlFor="major" className="form-label required text-left">학과/전공</label>
                  <input type="text" id="major" name="major" className="form-input" required />
                </div>
                
                <div className="form-group">
                  {/* 레이블 텍스트 왼쪽 정렬 */}
                  <label htmlFor="phone" className="form-label required text-left">전화번호</label>
                  <input type="tel" id="phone" name="phone" className="form-input" required />
                </div>
                
                <div className="form-group">
                  {/* 레이블 텍스트 왼쪽 정렬 */}
                  <label htmlFor="techStack" className="form-label text-left">기술 스택</label>
                  <input type="text" id="techStack" name="techStack" className="form-input" placeholder="예: Python, JavaScript, React, Node.js" />
                </div>
                
                <div className="form-group">
                  {/* 레이블 텍스트 왼쪽 정렬 */}
                  <label htmlFor="awards" className="form-label text-left">수상 경력</label>
                  <textarea id="awards" name="awards" className="form-input form-textarea" placeholder="프로그래밍 대회, 해커톤, 창업 경진대회 등의 수상 경력을 작성해주세요"></textarea>
                </div>
                
                <div className="form-group">
                  {/* 레이블 텍스트 왼쪽 정렬 */}
                  <label htmlFor="projectExperience" className="form-label text-left">프로젝트 경험</label>
                  <textarea id="projectExperience" name="projectExperience" className="form-input form-textarea" placeholder="개인 프로젝트, 팀 프로젝트, 오픈소스 기여 등의 경험을 작성해주세요"></textarea>
                </div>
                
                <div className="form-group">
                  {/* 레이블 텍스트 왼쪽 정렬 */}
                  <label htmlFor="interests" className="form-label required text-left">관심 분야</label>
                  <textarea id="interests" name="interests" className="form-input form-textarea" placeholder="웹 개발, 모바일 앱, AI/ML, 게임 개발 등 관심 있는 분야를 작성해주세요" required></textarea>
                </div>
                
                <div className="form-group">
                  {/* 레이블 텍스트 왼쪽 정렬 */}
                  <label htmlFor="selfIntroduction" className="form-label required text-left">자기소개</label>
                  <textarea id="selfIntroduction" name="selfIntroduction" className="form-input form-textarea" placeholder="자신의 성격, 장점, 개발에 대한 열정 등을 자유롭게 작성해주세요" required></textarea>
                </div>
                
                <div className="form-group">
                  {/* 레이블 텍스트 왼쪽 정렬 */}
                  <label htmlFor="expectations" className="form-label required text-left">TCP에 대한 기대</label>
                  <textarea id="expectations" name="expectations" className="form-input form-textarea" placeholder="TCP에서 무엇을 배우고 경험하고 싶은지, 어떤 기여를 할 수 있는지 작성해주세요" required></textarea>
                </div>
                
                <div className="checkbox-container">
                  <input type="checkbox" id="privacyAgreement" name="privacyAgreement" required />
                  {/* 레이블 텍스트 왼쪽 정렬 */}
                  <label htmlFor="privacyAgreement" className="text-sm text-gray-300 text-left">개인정보 수집 및 이용에 동의합니다.</label>
                </div>
                
                <button type="submit" className="w-full cta-button py-3 rounded-lg font-bold orbitron text-white hover:text-black transition-colors">
                  <i className="fas fa-paper-plane mr-2"></i>
                  지원서 제출
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Recruitment;