import React, { useEffect, useMemo, useRef, useState } from "react";

// ------------------------------------------------------------
// Team.jsx – React refactor of "team (1).html"
// - TailwindCSS styling
// - Search / Role / Status / Category filters + Tag cloud
// - "팀 모집 시작하기" modal (create recruitment)
// - Team detail modal with image carousel
// - IntersectionObserver card reveal
// - Accessible dialogs (ESC to close, backdrop click)
// ------------------------------------------------------------

export default function Team() {
  // ---- Seed data (ported & slightly condensed from team (1).html) ----
  const initialTeams = useMemo(
    () => [
      {
        id: 1,
        title: "2025 AI Creativity Hackathon",
        category: "해커톤",
        leader: {
          name: "김AI",
          avatar: "https://via.placeholder.com/40/A8C5E6/FFFFFF?text=김",
          role: "팀 리더",
        },
        status: "모집중",
        period: "2025.07.14 – 2025.07.18",
        deadline: "2025-06-30",
        description:
          "AI 모델을 활용해 사회 문제를 해결하는 프로젝트. 초보도 환영합니다! 함께 창의적인 아이디어를 구현해보세요.",
        fullDescription:
          `이번 AI Creativity Hackathon은 인공지능 기술을 활용하여 실제 사회 문제를 해결하는 창의적인 솔루션을 개발하는 대회입니다.\n\n팀원들과 함께 브레인스토밍을 통해 문제를 정의하고, AI 모델을 설계하여 프로토타입을 완성합니다. 경험이 부족하더라도 배움의 의지가 있다면 누구나 환영합니다.\n\n대회 기간 동안 전문가 멘토링과 다양한 워크숍이 제공되며, 협업 중심의 실전 경험을 쌓을 수 있습니다.`, // eslint-disable-line no-useless-escape
        neededRoles: "기획, 프론트엔드",
        participants: [
          {
            name: "김AI",
            role: "팀 리더",
            avatar: "https://via.placeholder.com/40/A8C5E6/FFFFFF?text=김",
          },
        ],
        techStack: ["Python", "FastAPI", "React", "Tailwind", "OpenAI"],
        tags: ["AI", "해커톤", "프론트엔드", "초보환영"],
        images: [
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1550063873-ab792950096b?q=80&w=1974&auto=format&fit=crop",
        ],
        links: ["https://example.com/hackathon"],
        location: "온/오프라인 혼합",
        selectionProcess: "서류 → 간단한 인터뷰 → 최종 합류",
        contact: "leader@example.com",
        goals: ["프로토타입 완성", "데모데이 참가", "사회적 가치 창출"],
        benefits: ["실무 경험", "포트폴리오", "네트워킹"],
      },
      {
        id: 2,
        title: "Software Maestro Pre-screening",
        category: "공모전",
        leader: {
          name: "박백",
          avatar: "https://via.placeholder.com/40/A8C5E6/FFFFFF?text=박",
          role: "팀 리더",
        },
        status: "모집중",
        period: "2025.08.01 – 2025.08.15",
        deadline: "2025-07-15",
        description: "실 서비스 지향 프로젝트를 위한 풀스택 팀 빌딩 중입니다.",
        fullDescription: // eslint-disable-line no-useless-escape
          `서비스 운영을 목표로 하는 팀으로, 안정성과 확장성을 고려한 백엔드 구조 설계를 지향합니다.`, 
        neededRoles: "백엔드",
        participants: [
          {
            name: "박백",
            role: "팀 리더",
            avatar: "https://via.placeholder.com/40/A8C5E6/FFFFFF?text=박",
          },
        ],
        techStack: ["NestJS", "PostgreSQL", "AWS"],
        tags: ["공모전", "백엔드"],
        images: [
          "https://images.unsplash.com/photo-1550063873-ab792950096b?q=80&w=1974&auto=format&fit=crop",
        ],
        links: ["https://example.com/maestro"],
        location: "온라인",
        selectionProcess: "지원서 검토 → 기술 미션 → 합류",
        contact: "apply@maestro.dev",
        goals: ["MVP 출시", "사용자 100명 확보"],
        benefits: ["클라우드 크레딧", "멘토링"],
      },
      {
        id: 3,
        title: "대학생 연합 앱개발 프로젝트",
        category: "프로젝트",
        leader: {
          name: "이프",
          avatar: "https://via.placeholder.com/40/A8C5E6/FFFFFF?text=이",
          role: "팀 리더",
        },
        status: "모집중",
        period: "2025.09.01 – 2025.12.15",
        deadline: "2025-08-20",
        description: "캠퍼스 생활을 편리하게 만들어 줄 앱을 함께 만들어요!",
        fullDescription: // eslint-disable-line no-useless-escape
          `학내 공지, 일정, 커뮤니티를 하나로 통합하는 캠퍼스 앱을 개발합니다.`, 
        neededRoles: "디자인, 프론트엔드, 백엔드",
        participants: [
          {
            name: "이프",
            role: "팀 리더",
            avatar: "https://via.placeholder.com/40/A8C5E6/FFFFFF?text=이",
          },
        ],
        techStack: ["React Native", "Supabase", "Figma"],
        tags: ["프론트엔드", "백엔드", "디자인", "초보환영"],
        images: [
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
        ],
        links: [],
        location: "오프라인(서울)",
        selectionProcess: "포트폴리오 검토 → 인터뷰",
        contact: "union@app.dev",
        goals: ["출시", "학과 제휴"],
        benefits: ["대회 참가", "운영 경험"],
      },
      {
        id: 4,
        title: "ICPC 예선 대비 스터디",
        category: "스터디",
        leader: {
          name: "최알",
          avatar: "https://via.placeholder.com/40/A8C5E6/FFFFFF?text=최",
          role: "스터디장",
        },
        status: "모집완료",
        period: "2025.03.10 – 2025.05.30",
        deadline: "2025-03-05",
        description: "ACM-ICPC 대회 준비를 위한 집중 스터디 그룹",
        fullDescription: // eslint-disable-line no-useless-escape
          `주 2회 문제 풀이와 토론, 라이트닝 강의로 실력을 끌어올립니다.`,
        neededRoles: "알고리즘",
        participants: [
          {
            name: "최알",
            role: "스터디장",
            avatar: "https://via.placeholder.com/40/A8C5E6/FFFFFF?text=최",
          },
        ],
        techStack: ["C++", "Python"],
        tags: ["알고리즘", "공모전"],
        images: [
          "https://images.unsplash.com/photo-1517694712202-1428bc64a25a?q=80&w=2070&auto=format&fit=crop",
        ],
        links: [],
        location: "온라인",
        selectionProcess: "간단한 코딩 테스트",
        contact: "icpc@study.dev",
        goals: ["ICPC 예선 통과"],
        benefits: ["알고리즘 실력 향상"],
      },
    ],
    []
  );

  const [teams, setTeams] = useState(initialTeams);

  // ---- Filters ----
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [activeTag, setActiveTag] = useState("");

  // ---- Modals ----
  const [showRecruitModal, setShowRecruitModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ---- Helpers ----
  const TAGS = [
    "AI",
    "해커톤",
    "프론트엔드",
    "백엔드",
    "공모전",
    "초보환영",
    "프로젝트",
    "알고리즘",
  ];

  const tagColorClass = (tag) => {
    const map = {
      AI: "bg-blue-900 text-blue-300",
      해커톤: "bg-yellow-900 text-yellow-300",
      프론트엔드: "bg-green-900 text-green-300",
      백엔드: "bg-purple-900 text-purple-300",
      공모전: "bg-pink-900 text-pink-300",
      초보환영: "bg-gray-700 text-gray-300",
      프로젝트: "bg-indigo-900 text-indigo-300",
      알고리즘: "bg-red-900 text-red-300",
    };
    return map[tag] || "bg-gray-700 text-gray-300";
  };

  const isExpired = (deadline) => {
    if (!deadline) return false;
    const d = new Date(deadline);
    if (Number.isNaN(d.getTime())) return false;
    const today = new Date();
    // Compare by date only
    return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const filteredTeams = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return teams.filter((t) => {
      const titleMatch = t.title.toLowerCase().includes(term);
      const tagsMatch = t.tags?.some((tg) => tg.toLowerCase().includes(term));
      const searchMatch = !term || titleMatch || tagsMatch;

      const roleMatch = !filterRole || (t.neededRoles || "").includes(filterRole);
      const statusMatch = !filterStatus || t.status === filterStatus;
      const categoryMatch = !filterCategory || t.category === filterCategory;
      const tagButtonMatch = !activeTag || t.tags?.includes(activeTag);

      return searchMatch && roleMatch && statusMatch && categoryMatch && tagButtonMatch;
    });
  }, [teams, searchTerm, filterRole, filterStatus, filterCategory, activeTag]);

  // ---- IntersectionObserver for cards ----
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".recruitment-card").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredTeams]);

  // ---- Modal a11y (ESC & backdrop close) ----
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setShowRecruitModal(false);
        setShowDetailModal(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // ---- Handlers ----
  const openDetail = (team) => {
    setSelectedTeam(team);
    setCurrentImageIndex(0);
    setShowDetailModal(true);
    document.body.style.overflow = "hidden";
  };
  const closeDetail = () => {
    setShowDetailModal(false);
    setSelectedTeam(null);
    document.body.style.overflow = "auto";
  };

  const openRecruit = () => {
    setShowRecruitModal(true);
    document.body.style.overflow = "hidden";
  };
  const closeRecruit = () => {
    setShowRecruitModal(false);
    document.body.style.overflow = "auto";
  };

  const changeImage = (dir) => {
    if (!selectedTeam || (selectedTeam.images?.length || 0) <= 1) return;
    setCurrentImageIndex((prev) => {
      const len = selectedTeam.images.length;
      return (prev + dir + len) % len;
    });
  };

  // ---- Create recruitment form (controlled) ----
  const [form, setForm] = useState({
    title: "",
    category: "",
    period: "",
    deadline: "",
    description: "",
    neededRoles: "",
    techStack: "",
    tags: "",
    links: "",
    location: "",
    selectionProcess: "",
    contact: "",
  });

  const onForm = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submitRecruit = (e) => {
    e.preventDefault();
    const newTeam = {
      id: teams.length ? Math.max(...teams.map((t) => t.id)) + 1 : 1,
      title: form.title,
      category: form.category,
      leader: {
        name: "현재 사용자",
        avatar: "https://via.placeholder.com/40/A8C5E6/FFFFFF?text=U",
        role: "팀 리더",
      },
      status: "모집중",
      period: form.period,
      deadline: form.deadline,
      description: form.description,
      fullDescription: form.description,
      neededRoles: form.neededRoles,
      participants: [
        {
          name: "현재 사용자",
          role: "팀 리더",
          avatar: "https://via.placeholder.com/40/A8C5E6/FFFFFF?text=U",
        },
      ],
      techStack: splitCsv(form.techStack),
      tags: splitCsv(form.tags),
      images: [
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
      ],
      links: splitCsv(form.links),
      location: form.location,
      selectionProcess: form.selectionProcess,
      contact: form.contact,
      goals: ["프로젝트 완성", "팀워크 향상", "실무 경험"],
      benefits: ["실무 경험", "포트폴리오", "네트워킹"],
    };

    setTeams((t) => [newTeam, ...t]);
    setForm({
      title: "",
      category: "",
      period: "",
      deadline: "",
      description: "",
      neededRoles: "",
      techStack: "",
      tags: "",
      links: "",
      location: "",
      selectionProcess: "",
      contact: "",
    });
    closeRecruit();
    alert("팀 모집이 성공적으로 등록되었습니다!");
  };

  const splitCsv = (s) =>
    s
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);

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
          onClick={openRecruit}
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
            <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-2">
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
            <label htmlFor="filter-role" className="block text-sm font-medium text-gray-300 mb-2">
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
            <label htmlFor="filter-status" className="block text-sm font-medium text-gray-300 mb-2">
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
            <label htmlFor="filter-category" className="block text-sm font-medium text-gray-300 mb-2">
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
                className={`tag-btn px-3 py-1 rounded-full text-xs hover:opacity-80 transition-colors ${tagColorClass(tag)} ${activeTag === tag ? "ring-2 ring-accent-blue" : ""}`}
                onClick={() => setActiveTag((t) => (t === tag ? "" : tag))}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div id="recruitment-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTeams.map((team) => {
          const expired = isExpired(team.deadline);
          const disabled = team.status !== "모집중" || expired;
          return (
            <div
              key={team.id}
              className={`recruitment-card rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
              onClick={() => !disabled && openDetail(team)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (!disabled && (e.key === "Enter" || e.key === " ")) openDetail(team);
              }}
            >
              <img src={team.images?.[0]} alt={team.title} className="w-full h-40 object-cover" />
              <div className="p-6">
                <span className={`text-xs font-semibold mb-2 block ${team.status === "모집완료" ? "text-gray-500" : "text-accent-blue"} text-left`}>
                  {team.category} 팀원 모집
                </span>
                <h3 className={`orbitron text-xl font-bold mb-3 ${team.status === "모집완료" ? "text-gray-500" : ""} text-left`}>
                  {team.title}
                </h3>

                <div className={`text-sm space-y-2 mb-4 ${team.status === "모집완료" ? "text-gray-500" : "text-gray-400"} text-left`}>
                  <p>
                    <i className="fas fa-users mr-2 w-4 text-center" />
                    <strong className={`${team.status === "모집완료" ? "text-gray-400" : "text-gray-300"}`}>
                      필요 역할:
                    </strong>{" "}
                    {team.neededRoles}
                  </p>
                  <p>
                    <i className="fas fa-calendar-alt mr-2 w-4 text-center" />
                    <strong className={`${team.status === "모집완료" ? "text-gray-400" : "text-gray-300"}`}>
                      일정:
                    </strong>{" "}
                    {team.period}
                  </p>
                  <p>
                    <i className="fas fa-info-circle mr-2 w-4 text-center" />
                    {team.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {team.tags?.map((tg, idx) => (
                    <span key={`${team.id}-tg-${idx}`} className={`px-2 py-1 rounded-full text-xs ${tagColorClass(tg)}`}>
                      {tg}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-left">
                  <span className={`text-xs ${team.status === "모집완료" ? "text-gray-500" : expired ? "text-red-500" : "text-red-400"}`}>
                    {team.status === "모집완료" ? "모집 완료" : expired ? "마감됨" : `마감: ${team.deadline}`}
                  </span>
                  <button
                    className={`${disabled ? "bg-gray-700 text-gray-500 cursor-not-allowed" : "cta-button text-white"} px-4 py-2 rounded-lg text-sm font-bold`}
                    disabled={disabled}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!disabled) openDetail(team);
                    }}
                  >
                    {disabled ? "마감" : "지원하기"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recruitment Modal */}
      {showRecruitModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeRecruit();
          }}
        >
          <div className="w-full max-w-3xl bg-gray-900 rounded-2xl border border-gray-800 p-6" onMouseDown={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="orbitron text-2xl font-bold gradient-text">팀 모집 시작하기</h3>
              <button onClick={closeRecruit} className="text-gray-400 hover:text-white text-2xl" aria-label="모달 닫기">
                <i className="fas fa-times" />
              </button>
            </div>

            <form className="space-y-6" onSubmit={submitRecruit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput label="프로젝트 제목 *" name="title" value={form.title} onChange={onForm} required placeholder="프로젝트 제목을 입력하세요" />
                <FormSelect
                  label="카테고리 *"
                  name="category"
                  value={form.category}
                  onChange={onForm}
                  required
                  options={["해커톤", "공모전", "프로젝트", "스터디"]}
                />
                <FormInput label="진행 기간 *" name="period" value={form.period} onChange={onForm} required placeholder="2025.07.14 – 2025.07.18" />
                <FormInput label="지원 마감일 *" name="deadline" type="date" value={form.deadline} onChange={onForm} required />
                <FormTextarea label="프로젝트 설명 *" name="description" value={form.description} onChange={onForm} required placeholder="무엇을 만들고 왜 하는지 적어주세요" />
                <FormInput label="모집 중인 역할 *" name="neededRoles" value={form.neededRoles} onChange={onForm} required placeholder="예) 기획, 프론트엔드" />
                <FormInput label="기술 스택" name="techStack" value={form.techStack} onChange={onForm} placeholder="예) React, Tailwind (쉼표로 구분)" />
                <FormInput label="태그" name="tags" value={form.tags} onChange={onForm} placeholder="예) AI, 해커톤 (쉼표로 구분)" />
                <FormInput label="관련 링크" name="links" value={form.links} onChange={onForm} placeholder="https://github.com/project (쉼표로 구분)" />
                <FormInput label="진행 방식" name="location" value={form.location} onChange={onForm} placeholder="온라인 / 오프라인(서울) 등" />
                <FormInput label="선발 과정" name="selectionProcess" value={form.selectionProcess} onChange={onForm} placeholder="서류 → 과제 → 인터뷰" />
                <FormInput label="연락처 *" name="contact" value={form.contact} onChange={onForm} required placeholder="이메일 또는 오픈채팅 링크" />
              </div>

              <div className="flex justify-end gap-3">
                <button type="button" onClick={closeRecruit} className="px-6 py-2 border border-gray-600 rounded-lg hover:border-gray-400 transition-colors">
                  취소
                </button>
                <button type="submit" className="cta-button px-6 py-2 rounded-lg font-medium text-white">
                  모집 시작하기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {showDetailModal && selectedTeam && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeDetail();
          }}
        >
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-gray-800 p-6" onMouseDown={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="orbitron text-2xl font-bold gradient-text">팀 상세 정보</h3>
              <button onClick={closeDetail} className="text-gray-400 hover:text-white text-2xl" aria-label="모달 닫기">
                <i className="fas fa-times" />
              </button>
            </div>

            {/* Image Carousel */}
            {selectedTeam.images?.length ? (
              <div className="relative mb-6">
                <img
                  src={selectedTeam.images[currentImageIndex]}
                  alt={`${selectedTeam.title} 이미지 ${currentImageIndex + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                {selectedTeam.images.length > 1 && (
                  <>
                    <button
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2"
                      onClick={() => changeImage(-1)}
                      aria-label="이전 이미지"
                    >
                      <i className="fas fa-chevron-left" />
                    </button>
                    <button
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2"
                      onClick={() => changeImage(1)}
                      aria-label="다음 이미지"
                    >
                      <i className="fas fa-chevron-right" />
                    </button>
                  </>
                )}
              </div>
            ) : null}

            {/* Project Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <i className="fas fa-info-circle text-blue-400 mr-2" />기본 정보
                </h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <InfoRow label="상태">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${selectedTeam.status === "모집중" ? "bg-green-900 text-green-300" : "bg-gray-700 text-gray-300"}`}>
                      {selectedTeam.status}
                    </span>
                  </InfoRow>
                  <InfoRow label="카테고리">{selectedTeam.category}</InfoRow>
                  <InfoRow label="진행 기간">{selectedTeam.period}</InfoRow>
                  <InfoRow label="지원 마감">
                    <span className={`${isExpired(selectedTeam.deadline) ? "text-red-400" : "text-yellow-400"}`}>
                      {selectedTeam.deadline}
                    </span>
                  </InfoRow>
                  <InfoRow label="진행 방식">{selectedTeam.location}</InfoRow>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <i className="fas fa-user-crown text-yellow-400 mr-2" />팀 리더
                </h4>
                <div className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                  <div className="relative">
                    <img src={selectedTeam.leader.avatar} alt={selectedTeam.leader.name} className="w-12 h-12 rounded-full border-2 border-accent-blue" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-500 text-black rounded-full grid place-items-center text-xs">
                      <i className="fas fa-crown" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-white">{selectedTeam.leader.name}</div>
                    <div className="text-sm text-gray-400">{selectedTeam.leader.role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <section className="mb-6">
              <h4 className="font-semibold text-white mb-3 flex items-center">
                <i className="fas fa-file-alt text-green-400 mr-2" />프로젝트 상세 설명
              </h4>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <p className="text-gray-300 whitespace-pre-line">{selectedTeam.fullDescription}</p>
              </div>
            </section>

            {/* Participants */}
            <section className="mb-6">
              <h4 className="font-semibold text-white mb-3 flex items-center">
                <i className="fas fa-users text-purple-400 mr-2" />현재 팀원 ({selectedTeam.participants?.length || 0}명)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedTeam.participants?.map((p, idx) => (
                  <div key={`p-${idx}`} className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                    <img src={p.avatar} alt={p.name} className="w-10 h-10 rounded-full border-2 border-gray-600" />
                    <div>
                      <div className="font-semibold text-white">{p.name}</div>
                      <div className="text-sm text-gray-400">{p.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Needed Roles */}
            <section className="mb-6">
              <h4 className="font-semibold text-white mb-3 flex items-center">
                <i className="fas fa-user-plus text-red-400 mr-2" />모집 중인 역할
              </h4>
              <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                <p className="text-red-300">{selectedTeam.neededRoles}</p>
              </div>
            </section>

            {/* Tech Stack */}
            <section className="mb-6">
              <h4 className="font-semibold text-white mb-3 flex items-center">
                <i className="fas fa-code text-blue-400 mr-2" />기술 스택
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedTeam.techStack?.map((tech, idx) => (
                  <span key={`tech-${idx}`} className="px-2 py-1 bg-gray-800 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Goals & Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <section>
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <i className="fas fa-target text-green-400 mr-2" />프로젝트 목표
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {selectedTeam.goals?.map((g, idx) => (
                    <li key={`goal-${idx}`}>{g}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <i className="fas fa-gift text-yellow-400 mr-2" />참여 혜택
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {selectedTeam.benefits?.map((b, idx) => (
                    <li key={`benefit-${idx}`}>{b}</li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Selection Process */}
            <section className="mb-6">
              <h4 className="font-semibold text-white mb-3 flex items-center">
                <i className="fas fa-clipboard-check text-indigo-400 mr-2" />선발 과정
              </h4>
              <div className="bg-indigo-900/20 border border-indigo-800 rounded-lg p-4">
                <p className="text-indigo-300">{selectedTeam.selectionProcess}</p>
              </div>
            </section>

            {/* Links */}
            {selectedTeam.links?.length ? (
              <section className="mb-6">
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <i className="fas fa-link text-pink-400 mr-2" />관련 링크
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTeam.links.map((lnk, idx) => (
                    <a
                      key={`lnk-${idx}`}
                      href={lnk}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center px-3 py-2 bg-gray-800/50 rounded-lg text-blue-400 hover:text-blue-300 text-sm"
                    >
                      <i className="fas fa-external-link-alt mr-2" />
                      {lnk}
                    </a>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Contact + Actions */}
            <section className="mb-6">
              <h4 className="font-semibold text-white mb-3 flex items-center">
                <i className="fas fa-envelope text-green-400 mr-2" />연락처
              </h4>
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
                <p className="text-green-300">{selectedTeam.contact}</p>
              </div>
            </section>

            <div className="flex justify-end gap-3">
              <button onClick={closeDetail} className="px-6 py-2 border border-gray-600 rounded-lg hover:border-gray-400 transition-colors">
                닫기
              </button>
              {selectedTeam.status === "모집중" && !isExpired(selectedTeam.deadline) ? (
                <button
                  onClick={() => {
                    alert("지원이 완료되었습니다! 팀 리더가 연락드릴 예정입니다.");
                    closeDetail();
                  }}
                  className="cta-button px-6 py-2 rounded-lg font-medium text-white"
                >
                  <i className="fas fa-paper-plane mr-2" />지원하기
                </button>
              ) : (
                <button disabled className="bg-gray-700 text-gray-500 cursor-not-allowed px-6 py-2 rounded-lg font-medium">
                  지원 불가
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// -----------------------------
// Small form field components
// -----------------------------
function FormInput({ label, name, value, onChange, type = "text", required = false, placeholder = "" }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="form-input w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent-blue focus:outline-none"
      />
    </div>
  );
}

function FormTextarea({ label, name, value, onChange, required = false, placeholder = "" }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={4}
        className="form-textarea w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent-blue focus:outline-none"
      />
    </div>
  );
}

function FormSelect({ label, name, value, onChange, options = [], required = false }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="form-select w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 focus:ring-2 focus:ring-accent-blue focus:outline-none"
      >
        <option value="">선택하세요</option>
        {options.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
}

function InfoRow({ label, children }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-400">{label}:</span>
      <span>{children}</span>
    </div>
  );
}