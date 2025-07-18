import React, { useEffect, useState } from 'react';
// import logo from '../logo.svg'; // 이 페이지에서 직접 logo.svg를 사용하지는 않습니다.

function Study() {
  // 스터디 데이터 (dummy data from original HTML)
  const allStudies = [
    // 2025 Studies
    {
      year: 2025,
      title: '심화 알고리즘 & 코딩 테스트',
      period: '2025.03 - 2025.06 (1학기)',
      method: '주 2회 온라인/오프라인 병행',
      location: 'Zoom & 동아리실',
      members: '8명',
      techstack: 'Python, C++, Java',
      description: '고급 알고리즘 문제 풀이 및 실제 코딩 테스트 대비 스터디입니다. 백준 플래티넘 이상 목표.',
      tags: ['알고리즘', '코딩테스트', '심화'],
      link: '#', // 실제 스터디 상세 페이지 링크로 변경 가능
    },
    {
      year: 2025,
      title: 'Next.js 기반 풀스택 웹 개발',
      period: '2025.03 - 2025.07 (1학기)',
      method: '주 1회 오프라인',
      location: '동아리실',
      members: '6명',
      techstack: 'Next.js, TypeScript, NestJS, MongoDB',
      description: 'Next.js 프레임워크를 활용한 웹 서비스 기획부터 배포까지 풀스택 개발 과정을 학습합니다. 개인 프로젝트 병행.',
      tags: ['웹개발', '풀스택', 'Next.js'],
      link: '#',
    },
    {
      year: 2025,
      title: 'Kubernetes & DevOps',
      period: '2025.04 - 2025.08',
      method: '주 1회 온라인',
      location: 'Discord',
      members: '5명',
      techstack: 'Kubernetes, Docker, CI/CD, AWS',
      description: '컨테이너 오케스트레이션 도구 Kubernetes를 중심으로 DevOps 파이프라인 구축을 학습합니다.',
      tags: ['DevOps', '클라우드', 'Kubernetes'],
      link: '#',
    },
    {
      year: 2025,
      title: 'Generative AI 프로젝트 스터디',
      period: '2025.05 - 2025.09',
      method: '주 1회 오프라인',
      location: '동아리실',
      members: '7명',
      techstack: 'Python, PyTorch, TensorFlow, Hugging Face',
      description: '최신 Generative AI 모델(LLM, Diffusion Model)을 활용한 미니 프로젝트를 진행하며 실습 위주로 학습합니다.',
      tags: ['AI', '머신러닝', '생성형AI'],
      link: '#',
    },
    // 2024 Studies
    {
      year: 2024,
      title: '기초 알고리즘 & 자료구조',
      period: '2024.03 - 2024.06 (1학기)',
      method: '주 2회 온라인',
      location: 'Gather Town',
      members: '10명',
      techstack: 'Python, C++',
      description: '컴퓨터공학 기본인 알고리즘과 자료구조를 탄탄하게 다지는 스터디입니다.',
      tags: ['알고리즘', '자료구조', '기초'],
      link: '#',
    },
    {
      year: 2024,
      title: 'Spring Boot 웹 서비스 개발',
      period: '2024.03 - 2024.07 (1학기)',
      method: '주 1회 오프라인',
      location: '동아리실',
      members: '7명',
      techstack: 'Spring Boot, Java, MySQL',
      description: '실제 웹 서비스를 개발하며 백엔드 프레임워크 Spring Boot의 핵심 개념을 익힙니다.',
      tags: ['웹개발', '백엔드', 'Spring'],
      link: '#',
    },
    {
      year: 2024,
      title: 'iOS 앱 개발 (Swift)',
      period: '2024.09 - 2024.12 (2학기)',
      method: '주 1회 오프라인',
      location: '동아리실',
      members: '6명',
      techstack: 'Swift, UIKit, SwiftUI',
      description: 'Swift 언어와 Apple 프레임워크를 이용한 iOS 앱 개발 기초부터 실전까지.',
      tags: ['모바일', 'iOS', 'Swift'],
      link: '#',
    },
    {
      year: 2024,
      title: 'React 기초 및 실습',
      period: '2024.09 - 2024.12 (2학기)',
      method: '주 1회 온라인',
      location: 'Google Meet',
      members: '8명',
      techstack: 'React, JavaScript, HTML, CSS',
      description: '프론트엔드 라이브러리 React의 기본 개념을 익히고 실습 프로젝트를 진행합니다.',
      tags: ['웹개발', '프론트엔드', 'React'],
      link: '#',
    },
    // 2023 Studies
    {
      year: 2023,
      title: '파이썬 데이터 분석',
      period: '2023.03 - 2023.06 (1학기)',
      method: '주 1회 온라인',
      location: 'Zoom',
      members: '12명',
      techstack: 'Python, Pandas, NumPy, Matplotlib',
      description: '파이썬을 이용한 데이터 수집, 가공, 분석 및 시각화 기법 학습.',
      tags: ['데이터분석', '파이썬', '초급'],
      link: '#',
    },
    {
      year: 2023,
      title: 'Unity 3D 게임 개발',
      period: '2023.09 - 2023.12 (2학기)',
      method: '주 1회 오프라인',
      location: '동아리실',
      members: '5명',
      techstack: 'Unity, C#',
      description: 'Unity 엔진을 활용하여 3D 게임을 개발하는 프로젝트 스터디.',
      tags: ['게임개발', 'Unity', 'C#'],
      link: '#',
    },
    // 2022 Studies
    {
      year: 2022,
      title: 'Java 프로그래밍 기초',
      period: '2022.03 - 2022.06 (1학기)',
      method: '주 2회 오프라인',
      location: '강의실',
      members: '15명',
      techstack: 'Java',
      description: '프로그래밍 첫 걸음을 위한 Java 기초 문법 및 객체지향 개념 학습.',
      tags: ['Java', '기초', '프로그래밍'],
      link: '#',
    },
    {
      year: 2022,
      title: '데이터베이스 설계 및 SQL',
      period: '2022.09 - 2022.12 (2학기)',
      method: '주 1회 온라인',
      location: 'Google Meet',
      members: '10명',
      techstack: 'MySQL, PostgreSQL, SQL',
      description: '관계형 데이터베이스 설계 원리 및 SQL 활용법 학습.',
      tags: ['데이터베이스', 'SQL'],
      link: '#',
    },
    // 2021 Studies
    {
      year: 2021,
      title: 'C언어 프로그래밍 입문',
      period: '2021.09 - 2021.12 (2학기)',
      method: '주 2회 오프라인',
      location: '강의실',
      members: '20명',
      techstack: 'C',
      description: 'TCP 창립 후 첫 번째 스터디로, C언어 기초 문법을 다룹니다.',
      tags: ['C언어', '기초', '입문'],
      link: '#',
    },
  ];

  // 현재 선택된 연도 상태 (기본값은 현재 연도 또는 'all')
  const [selectedYear, setSelectedYear] = useState(() => {
    const currentYear = new Date().getFullYear().toString();
    return allStudies.some(study => study.year.toString() === currentYear) ? currentYear : 'all';
  });
  // 모달의 열림/닫힘 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 모달에 표시할 스터디 정보
  const [selectedStudy, setSelectedStudy] = useState(null);

  // 연도 선택 핸들러
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // 스터디 상세 모달 열기
  const openStudyModal = (study) => {
    setSelectedStudy(study);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // 모달 열렸을 때 스크롤 방지
  };

  // 스터디 상세 모달 닫기
  const closeStudyModal = () => {
    setIsModalOpen(false);
    setSelectedStudy(null);
    document.body.style.overflow = 'auto'; // 모달 닫혔을 때 스크롤 복원
  };

  useEffect(() => {
    // Scroll animations (for .scroll-fade elements within this page)
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

    // .scroll-fade 클래스를 가진 모든 요소를 찾아서 관찰
    const scrollFadeElements = document.querySelectorAll('.scroll-fade');
    scrollFadeElements.forEach((el) => {
      observer.observe(el);
    });

    // 컴포넌트 언마운트 시 클린업
    return () => {
      observer.disconnect(); // IntersectionObserver 연결 해제
    };
  }, [selectedYear]); // selectedYear가 변경될 때마다 재실행하여 새로운 스터디 아이템도 관찰하도록 함.

  // 선택된 연도에 따라 스터디 목록 필터링
  const filteredStudies = selectedYear === 'all'
    ? allStudies
    : allStudies.filter(study => study.year.toString() === selectedYear);

  // 스터디 목록을 기간(period)의 최신순으로 정렬
  filteredStudies.sort((a, b) => {
    const parsePeriod = (period) => {
      const match = period.match(/(\d{4})\.(\d{2})/);
      return match ? new Date(parseInt(match[1]), parseInt(match[2]) - 1) : new Date(0);
    };
    return parsePeriod(b.period).getTime() - parsePeriod(a.period).getTime();
  });

  // 태그에 따라 다른 배경색을 적용하는 헬퍼 함수 (CSS 클래스와 매칭)
  const getTagClassName = (tagType) => {
    switch (tagType) {
      case '알고리즘': return 'tag-blue';
      case '코딩테스트': return 'tag-blue';
      case '심화': return 'tag-blue';
      case '웹개발': return 'tag-purple';
      case '풀스택': return 'tag-purple';
      case 'Next.js': return 'tag-purple';
      case 'DevOps': return 'tag-green';
      case '클라우드': return 'tag-green';
      case 'Kubernetes': return 'tag-green';
      case 'AI': return 'tag-yellow';
      case '머신러닝': return 'tag-yellow';
      case '생성형AI': return 'tag-yellow';
      case '데이터분석': return 'tag-green';
      case '파이썬': return 'tag-green';
      case '초급': return 'tag-green';
      case '게임개발': return 'tag-red';
      case 'Unity': return 'tag-red';
      case 'C#': return 'tag-red';
      case '모바일': return 'tag-purple';
      case 'iOS': return 'tag-purple';
      case 'Swift': return 'tag-purple';
      case '백엔드': return 'tag-purple';
      case 'Spring': return 'tag-purple';
      case 'Java': return 'tag-blue';
      case '프로그래밍': return 'tag-blue';
      case '데이터베이스': return 'tag-yellow';
      case 'SQL': return 'tag-yellow';
      case 'C언어': return 'tag-blue';
      case '입문': return 'tag-blue';
      case '자료구조': return 'tag-blue';
      default: return 'tag-blue'; // 기본 태그 색상
    }
  };

  return (
    <>
      <section className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 flex items-center justify-center">
                <i className="fas fa-book-open text-white text-3xl"></i>
              </div>
              <h1 className="orbitron text-5xl md:text-7xl font-black mb-4">
                <span className="gradient-text">TCP Study</span>
              </h1>
              <p className="orbitron text-xl md:text-2xl text-gray-300 mb-6">함께 배우고 성장하는 개발 커뮤니티</p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                TCP는 다양한 기술 스터디를 통해 멤버들의 개발 역량을 강화하고, 최신 기술 트렌드를 함께 탐구합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="study-list" className="py-16 bg-gradient-to-b from-transparent to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0">
            <h2 className="orbitron text-3xl md:text-4xl font-bold gradient-text">스터디 목록</h2>
            <div className="relative w-full md:w-auto">
              <label htmlFor="year-select" className="sr-only">년도 선택</label>
              <select
                id="year-select"
                className="w-full md:w-48 bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-accent-blue focus:outline-none"
                value={selectedYear}
                onChange={handleYearChange}
              >
                <option value="all">전체 년도</option>
                {[...new Set(allStudies.map(study => study.year))].sort((a,b)=> b-a).map(year => (
                  <option key={year} value={year.toString()}>{year}년</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
          
          <div id="study-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.length > 0 ? (
              filteredStudies.map((study, index) => (
                <div key={index} className="study-item p-6 rounded-xl card-hover scroll-fade" onClick={() => openStudyModal(study)}>
                  {/* 제목 텍스트 왼쪽 정렬 */}
                  <h3 className="orbitron text-xl font-bold mb-2 text-white text-left">{study.title}</h3>
                  {/* 기간 텍스트 왼쪽 정렬 */}
                  <p className="text-gray-400 mb-2 text-left">{study.period}</p>
                  {/* 설명 텍스트 왼쪽 정렬 */}
                  <p className="text-sm text-gray-500 text-left">{study.description.substring(0, 80)}...</p>
                  <div className="flex flex-wrap mt-3">
                    {study.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={`tag ${getTagClassName(tag)}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div id="no-studies-message" className="col-span-full text-center py-12 text-gray-500">
                <i className="fas fa-exclamation-circle text-5xl mb-4"></i>
                <p className="text-xl">해당 년도에는 등록된 스터디가 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Study Detail Modal */}
      {isModalOpen && selectedStudy && (
        <div id="studyDetailModal" className="modal active" onClick={(e) => e.target.id === 'studyDetailModal' && closeStudyModal()}>
          <div className="modal-content">
            <button className="close-modal" onClick={closeStudyModal}>
              <i className="fas fa-times"></i>
            </button>
            <h3 id="modal-study-title" className="orbitron text-2xl font-bold gradient-text mb-4 text-left">{selectedStudy.title}</h3> {/* 모달 제목 왼쪽 정렬 */}
            <div className="space-y-3 text-gray-300">
              <p className="text-left"><strong className="text-white">기간:</strong> <span id="modal-study-duration">{selectedStudy.period}</span></p> {/* 모달 내용 왼쪽 정렬 */}
              <p className="text-left"><strong className="text-white">진행 방식:</strong> <span id="modal-study-method">{selectedStudy.method}</span></p> {/* 모달 내용 왼쪽 정렬 */}
              <p className="text-left"><strong className="text-white">장소:</strong> <span id="modal-study-location">{selectedStudy.location}</span></p> {/* 모달 내용 왼쪽 정렬 */}
              <p className="text-left"><strong className="text-white">참여 인원:</strong> <span id="modal-study-members">{selectedStudy.members}</span></p> {/* 모달 내용 왼쪽 정렬 */}
              <p className="text-left"><strong className="text-white">기술 스택:</strong> <span id="modal-study-techstack">{selectedStudy.techstack}</span></p> {/* 모달 내용 왼쪽 정렬 */}
              <p className="pt-2 text-left"><strong className="text-white">설명:</strong> <span id="modal-study-description" className="block mt-1 text-gray-400">{selectedStudy.description}</span></p> {/* 모달 내용 왼쪽 정렬 */}
            </div>
            <div id="modal-study-tags" className="flex flex-wrap mt-4 text-left"> {/* 모달 태그 왼쪽 정렬 */}
              {selectedStudy.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className={`tag ${getTagClassName(tag)}`}>{tag}</span>
              ))}
            </div>
            <div className="mt-6 text-right">
              <a href={selectedStudy.link} target="_blank" rel="noopener noreferrer" className="cta-button px-6 py-2 rounded-lg text-sm font-bold text-white hover:text-black transition-colors">
                <i className="fas fa-external-link-alt mr-2"></i> 자세히 보기
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Study;