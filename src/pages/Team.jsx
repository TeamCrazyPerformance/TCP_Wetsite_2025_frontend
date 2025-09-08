import React, { useEffect, useMemo, useState } from 'react';
import { initialTeams } from '../data/teams';
import RecruitTeamModal from '../components/modals/RecruitTeamModal';
import TeamDetailModal from '../components/modals/TeamDetailModal';
import TeamCard from '../components/TeamCard';
import { tagColorClass } from '../utils/helpers';

const TAGS = [
  'AI',
  '해커톤',
  '프론트엔드',
  '백엔드',
  '공모전',
  '초보환영',
  '프로젝트',
  '알고리즘',
];

export default function Team() {
  const [teams, setTeams] = useState(initialTeams);

  // ---- Filters ----
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [activeTag, setActiveTag] = useState('');

  // ---- Modals ----
  const [isRecruitModalOpen, setIsRecruitModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const filteredTeams = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return teams.filter((t) => {
      const titleMatch = t.title.toLowerCase().includes(term);
      const tagsMatch = t.tags?.some((tg) => tg.toLowerCase().includes(term));
      const searchMatch = !term || titleMatch || tagsMatch;

      const roleMatch =
        !filterRole || (t.neededRoles || '').includes(filterRole);
      const statusMatch = !filterStatus || t.status === filterStatus;
      const categoryMatch = !filterCategory || t.category === filterCategory;
      const tagButtonMatch = !activeTag || t.tags?.includes(activeTag);

      return (
        searchMatch &&
        roleMatch &&
        statusMatch &&
        categoryMatch &&
        tagButtonMatch
      );
    });
  }, [teams, searchTerm, filterRole, filterStatus, filterCategory, activeTag]);

  // ---- IntersectionObserver for cards ----
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document
      .querySelectorAll('.recruitment-card')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredTeams]);

  // ---- Modal a11y (ESC & backdrop close) ----
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsRecruitModalOpen(false);
        setIsDetailModalOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // ---- Handlers ----
  const handleOpenDetail = (team) => {
    setSelectedTeam(team);
    setIsDetailModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetail = () => {
    setIsDetailModalOpen(false);
    setSelectedTeam(null);
    document.body.style.overflow = 'auto';
  };

  const handleOpenRecruit = () => {
    setIsRecruitModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseRecruit = () => {
    setIsRecruitModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleAddTeam = (newTeam) => {
    setTeams((prevTeams) => [newTeam, ...prevTeams]);
  };

  // ---- UI ----
  return (
    <main className="container mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="orbitron text-4xl md:text-5xl font-bold gradient-text mb-4">
          Find Your Team
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          함께 성장하고 도전할 최고의 팀원을 찾아보세요.
        </p>
        <button
          onClick={handleOpenRecruit}
          className="cta-button px-6 py-3 rounded-lg text-lg font-bold text-white"
          aria-label="팀 모집 시작하기"
        >
          <i className="fas fa-plus mr-2" />팀 모집 시작하기
        </button>
      </div>

      {/* Filters */}
      <div className="mb-10 p-6 bg-gray-900 rounded-xl border border-gray-800">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Search
            </label>
            <div className="relative">
              <input
                id="search"
                type="text"
                placeholder="제목 또는 태그로 검색"
                className="w-full bg-gray-800 border-gray-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent-blue focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div>
            <label
              htmlFor="filter-role"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Role
            </label>
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
              <option value="알고리즘">알고리즘</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="filter-status"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Status
            </label>
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

          <div>
            <label
              htmlFor="filter-category"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Category
            </label>
            <select
              id="filter-category"
              className="w-full bg-gray-800 border-gray-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent-blue focus:outline-none"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">모든 카테고리</option>
              <option value="해커톤">해커톤</option>
              <option value="공모전">공모전</option>
              <option value="프로젝트">프로젝트</option>
              <option value="스터디">스터디</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <div id="tag-cloud" className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <button
                key={tag}
                className={`tag-btn px-3 py-1 rounded-full text-xs hover:opacity-80 transition-colors ${tagColorClass(
                  tag
                )} ${activeTag === tag ? 'ring-2 ring-accent-blue' : ''}`}
                onClick={() => setActiveTag((t) => (t === tag ? '' : tag))}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div
        id="recruitment-grid"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredTeams.map((team) => (
          <TeamCard key={team.id} team={team} onOpenDetail={handleOpenDetail} />
        ))}
      </div>

      <RecruitTeamModal
        isOpen={isRecruitModalOpen}
        onClose={handleCloseRecruit}
        onAddTeam={handleAddTeam}
      />

      <TeamDetailModal
        isOpen={isDetailModalOpen}
        onClose={handleCloseDetail}
        team={selectedTeam}
      />
    </main>
  );
}
