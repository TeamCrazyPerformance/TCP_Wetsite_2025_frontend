import React, { useEffect, useState } from 'react';

function Team() {
  // 모집 게시글 데이터 (dummy data from original HTML)
  const allRecruitments = [
    {
      title: '2025 AI Creativity Hackathon',
      tags: ['AI', '해커톤', '기획', '프론트엔드', '초보환영'],
      rolesNeeded: ['기획', '프론트엔드'],
      status: '모집중',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop',
      type: '해커톤 팀원 모집',
      description: 'AI 모델을 활용해 사회 문제를 해결하는 프로젝트. 초보도 환영!',
      schedule: '2025.07.14 – 2025.07.18',
      deadline: '2025.06.30',
    },
    {
      title: 'Software Maestro Pre-screening',
      tags: ['공모전', '백엔드'],
      rolesNeeded: ['백엔드'],
      status: '모집중',
      image: 'https://images.unsplash.com/photo-1550063873-ab792950096b?q=80&w=1974&auto=format&fit=crop',
      type: '공모전 팀원 모집',
      description: '실 서비스 지향 프로젝트를 위한 풀스택 팀 빌딩 중입니다.',
      schedule: '2025.08.01 – 2025.08.15',
      deadline: '2025.07.15',
    },
    {
      title: '대학생 연합 앱개발 프로젝트',
      tags: ['프론트엔드', '백엔드', '디자인', '초보환영'],
      rolesNeeded: ['디자인', '프론트엔드', '백엔드'],
      status: '모집중',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop',
      type: '프로젝트 팀원 모집',
      description: '캠퍼스 생활을 편리하게 만들어 줄 앱을 함께 만들어요!',
      schedule: '2025.09.01 – 2025.12.15',
      deadline: '2025.08.20',
    },
    {
      title: 'ICPC 예선 대비 스터디',
      tags: ['알고리즘', '공모전'],
      rolesNeeded: ['알고리즘'],
      status: '모집완료',
      image: 'https://images.unsplash.com/photo-1517694712202-1428bc64a25a?q=80&w=2070&auto=format&fit=crop',
      type: '스터디 팀원 모집',
      description: 'ACM-ICPC 대회 준비를 위한 집중 스터디 그룹',
      schedule: '2025.03.10 – 2025.05.30',
      deadline: '모집 완료',
    },
  ];

  // 필터링 상태 관리
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [activeTag, setActiveTag] = useState(''); // 현재 선택된 태그

  // 스크롤 애니메이션 효과
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // .recruitment-card (scroll-fade가 적용된 요소)를 관찰
    const scrollFadeElements = document.querySelectorAll('.recruitment-card');
    scrollFadeElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [searchTerm, filterRole, filterStatus, activeTag]); // 필터 상태가 변경되면 다시 관찰하도록 의존성 추가

  // 필터링된 게시글 목록 계산
  const filteredRecruitments = allRecruitments.filter((card) => {
    const titleMatch = card.title.toLowerCase().includes(searchTerm.toLowerCase());
    const tagsMatch = card.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const searchCombined = titleMatch || tagsMatch;

    const roleMatch = !filterRole || card.rolesNeeded.includes(filterRole);
    const statusMatch = !filterStatus || card.status === filterStatus;
    const tagButtonMatch = !activeTag || card.tags.includes(activeTag);

    return searchCombined && roleMatch && statusMatch && tagButtonMatch;
  });

  // 태그 버튼 클릭 핸들러
  const handleTagClick = (tag) => {
    setActiveTag(prevTag => (prevTag === tag ? '' : tag)); // 같은 태그를 다시 클릭하면 해제
  };

  // 태그 버튼의 동적 CSS 클래스 생성 (team.html의 색상 매핑)
  const getTagBgClass = (tag) => {
      switch (tag) {
          case 'AI': return 'bg-blue-900 text-blue-300';
          case '해커톤': return 'bg-yellow-900 text-yellow-300';
          case '프론트엔드': return 'bg-green-900 text-green-300';
          case '백엔드': return 'bg-purple-900 text-purple-300';
          case '공모전': return 'bg-pink-900 text-pink-300';
          case '초보환영': return 'bg-gray-700 text-gray-300';
          case '알고리즘': return 'bg-gray-800 text-gray-500'; // 모집완료 태그와 유사하게
          default: return 'bg-gray-700 text-gray-300';
      }
  };


  return (
    <>
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="orbitron text-4xl md:text-5xl font-bold gradient-text mb-4">Find Your Team</h1>
          <p className="text-lg text-gray-400">함께 성장하고 도전할 최고의 팀원을 찾아보세요.</p>
        </div>

        <div className="mb-10 p-6 bg-gray-900 rounded-xl border border-gray-800">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-2">Search</label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="제목 또는 태그로 검색"
                  className="w-full bg-gray-800 border-gray-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent-blue focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
              </div>
            </div>
            <div>
              <label htmlFor="filter-role" className="block text-sm font-medium text-gray-300 mb-2">Role</label>
              <select
                id="filter-role"
                className="w-full bg-gray-800 border-gray-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent-blue focus:outline-none"
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
              >
                <option value="">모든 역할</option>
                <option value="기획">기획</option>
                <option value="디자인">디자인</option>
                <option value="프론트엔드">프론트엔드</option>
                <option value="백엔드">백엔드</option>
                <option value="AI">AI</option>
                <option value="알고리즘">알고리즘</option> {/* ICPC 스터디를 위해 추가 */}
              </select>
            </div>
            <div>
              <label htmlFor="filter-status" className="block text-sm font-medium text-gray-300 mb-2">Status</label>
              <select
                id="filter-status"
                className="w-full bg-gray-800 border-gray-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent-blue focus:outline-none"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">모든 상태</option>
                <option value="모집중">모집중</option>
                <option value="모집완료">모집완료</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <div id="tag-cloud" className="flex flex-wrap gap-2">
              {['AI', '해커톤', '프론트엔드', '백엔드', '공모전', '초보환영', '알고리즘'].map(tag => (
                <button
                  key={tag}
                  className={`tag-btn px-3 py-1 rounded-full text-xs hover:opacity-80 transition-colors
                  ${getTagBgClass(tag)} ${activeTag === tag ? 'ring-2 ring-accent-blue' : ''}`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div id="recruitment-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecruitments.map((card, index) => (
            <div
              key={index} // 고유한 key prop 추가
              className={`recruitment-card rounded-xl overflow-hidden ${card.status === '모집완료' ? 'opacity-50' : ''}`}
            >
              <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
              <div className="p-6">
                {/* 유형 텍스트 왼쪽 정렬 */}
                <span className={`text-xs font-semibold mb-2 block ${card.status === '모집완료' ? 'text-gray-500' : 'text-accent-blue'} text-left`}>{card.type}</span>
                {/* 제목 텍스트 왼쪽 정렬 */}
                <h3 className={`orbitron text-xl font-bold mb-3 ${card.status === '모집완료' ? 'text-gray-500' : ''} text-left`}>{card.title}</h3>
                {/* 역할, 일정, 설명 텍스트 왼쪽 정렬 */}
                <div className={`text-sm space-y-2 mb-4 ${card.status === '모집완료' ? 'text-gray-500' : 'text-gray-400'} text-left`}>
                  <p><i className="fas fa-users mr-2 w-4 text-center"></i><strong className={`${card.status === '모집완료' ? 'text-gray-400' : 'text-gray-300'}`}>필요 역할:</strong> {card.rolesNeeded.join(', ')}</p>
                  <p><i className="fas fa-calendar-alt mr-2 w-4 text-center"></i><strong className={`${card.status === '모집완료' ? 'text-gray-400' : 'text-gray-300'}`}>일정:</strong> {card.schedule}</p>
                  <p><i className="fas fa-info-circle mr-2 w-4 text-center"></i>{card.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {card.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`px-2 py-1 rounded-full text-xs ${getTagBgClass(tag)}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                {/* 마감 정보 텍스트 왼쪽 정렬 (justify-between으로 인해 span 자체는 왼쪽 끝에 위치) */}
                <div className="flex justify-between items-center text-left">
                  <span className={`text-xs ${card.status === '모집완료' ? 'text-gray-500' : 'text-red-400'}`}>
                    {card.status === '모집완료' ? '모집 완료' : `마감: ${card.deadline}`}
                  </span>
                  {card.status === '모집중' ? (
                    <a href="#" className="cta-button px-4 py-2 rounded-lg text-sm font-bold text-white">지원하기</a>
                  ) : (
                    <button className="bg-gray-700 px-4 py-2 rounded-lg text-sm font-bold text-gray-500 cursor-not-allowed">마감</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Team;