import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUsers, faStar, faChevronRight, faPlayCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function MyStudies() {
    // 스터디 목록 데모 데이터
    const [studies] = useState([
        {
            id: 1,
            title: 'React 심화 스터디',
            desc: '리액트 Hooks와 Context API를 활용한 프로젝트 진행',
            members: 4,
            status: 'ongoing', // 진행 중
            stars: 5,
            isLeader: true,
        },
        {
            id: 2,
            title: 'CS 지식 스터디',
            desc: '자료구조, 알고리즘, 운영체제 등 CS 지식 학습',
            members: 6,
            status: 'ongoing', // 진행 중
            stars: 4,
            isLeader: false,
        },
        {
            id: 3,
            title: 'AI/머신러닝 논문 읽기',
            desc: '최신 인공지능 논문 리뷰 및 토론',
            members: 3,
            status: 'completed', // 완료
            stars: 5,
            isLeader: false,
        },
        {
            id: 4,
            title: 'Node.js 백엔드 개발',
            desc: 'Express.js와 MongoDB를 활용한 API 서버 개발',
            members: 5,
            status: 'ongoing', // 진행 중
            stars: 4,
            isLeader: false,
        },
        {
            id: 5,
            title: '알고리즘 문제풀이',
            desc: '백준, 프로그래머스 위주로 문제 풀이',
            members: 8,
            status: 'completed', // 완료
            stars: 3,
            isLeader: false,
        },
        {
            id: 6,
            title: 'UI/UX 디자인 스터디',
            desc: 'Figma를 활용한 프로토타입 제작',
            members: 4,
            status: 'completed', // 완료
            stars: 5,
            isLeader: true,
        },
    ]);

    const [filter, setFilter] = useState('all'); // 'all', 'ongoing', 'completed'

    const filteredStudies = studies.filter(study => {
        if (filter === 'all') return true;
        return study.status === filter;
    });

    return (
        <div className="container mx-auto max-w-7xl">
            <div className="flex justify-between items-center mb-6">
                <h3 className="orbitron text-3xl font-bold gradient-text">나의 스터디</h3>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setFilter('all')}
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    >
                        전체
                    </button>
                    <button
                        onClick={() => setFilter('ongoing')}
                        className={`filter-btn ${filter === 'ongoing' ? 'active' : ''}`}
                    >
                        진행 중
                    </button>
                    <button
                        onClick={() => setFilter('completed')}
                        className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
                    >
                        완료
                    </button>
                </div>
            </div>

            {filteredStudies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredStudies.map(study => (
                        <div key={study.id} className="study-card p-6 rounded-xl card-hover">
                            <div className="flex items-center justify-between mb-4">
                                <span className={`status-badge ${study.status === 'ongoing' ? 'bg-blue-600' : 'bg-green-600'}`}>
                                    <FontAwesomeIcon icon={study.status === 'ongoing' ? faPlayCircle : faCheckCircle} className="mr-2" />
                                    {study.status === 'ongoing' ? '진행 중' : '완료'}
                                </span>
                                {study.isLeader && <span className="leader-badge">리더</span>}
                            </div>
                            <h4 className="orbitron text-xl font-bold text-white mb-2">{study.title}</h4>
                            <p className="text-gray-400 mb-4 truncate">{study.desc}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center text-gray-400 text-sm">
                                        <FontAwesomeIcon icon={faUsers} className="mr-1 text-blue-400" />
                                        <span>{study.members}명</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-sm">
                                        <FontAwesomeIcon icon={faStar} className="mr-1 text-yellow-400" />
                                        <span>{study.stars}점</span>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-white transition-colors">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center h-64 text-gray-500">
                    <p>
                        <FontAwesomeIcon icon={faBook} className="text-2xl mr-2" />
                        <span className="text-lg">참여 중인 스터디가 없습니다.</span>
                    </p>
                </div>
            )}
        </div>
    );
}

export default MyStudies;