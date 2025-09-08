
import React, { useState, useMemo } from 'react';

const sampleUsers = [
    { id: 1, name: '김민준', nickname: 'kimminjun', role: 'Admin', position: 'Frontend', techStacks: ['React', 'JavaScript', 'Node.js'], profileImage: 'https://via.placeholder.com/40/A8C5E6/FFFFFF?text=KM', joinDate: '2023-03-15', lastActive: '2024-01-15' },
    { id: 2, name: '이서연', nickname: 'leeseoyeon', role: 'Study Leader', position: 'AI', techStacks: ['Python', 'AI/ML', 'TensorFlow'], profileImage: 'https://via.placeholder.com/40/C5A8E6/FFFFFF?text=LS', joinDate: '2023-05-20', lastActive: '2024-01-14' },
    { id: 3, name: '박지훈', nickname: 'parkjihun', role: 'Member', position: 'Backend', techStacks: ['Java', 'Spring', 'MySQL'], profileImage: 'https://via.placeholder.com/40/A8E6C5/FFFFFF?text=PJ', joinDate: '2023-04-10', lastActive: '2024-01-13' },
];

const PermissionBadge = ({ role }) => {
    const roleClass = { Admin: 'permission-admin', 'Study Leader': 'permission-leader', Member: 'permission-member' }[role];
    return <span className={`permission-badge ${roleClass}`}>{role}</span>;
};

const TechTag = ({ tech }) => <span className="tech-tag">{tech}</span>;

const StatCard = ({ title, value, details, colorClass }) => (
    <div className="widget-card p-6 rounded-xl">
        <h4 className={`font-bold text-lg mb-4 ${colorClass}`}>{title}</h4>
        <div className="text-4xl font-black gradient-text mb-4">{value}</div>
        {details && <ul className="text-sm text-gray-300 space-y-2">{details.map(d => <li key={d.label} className="flex justify-between"><span>{d.label}</span><span className="font-semibold text-white">{d.count}</span></li>)}</ul>}
    </div>
);

const AdminPermission = () => {
    const [users, setUsers] = useState(sampleUsers);

    const stats = useMemo(() => {
        const admins = users.filter(u => u.role === 'Admin').length;
        const leaders = users.filter(u => u.role === 'Study Leader').length;
        const members = users.filter(u => u.role === 'Member').length;
        return {
            total: users.length,
            active: users.length, // Placeholder
            inactive: 0, // Placeholder
            admins,
            superAdmins: 1, // Placeholder
            normalAdmins: admins - 1,
            leaders,
            members,
        };
    }, [users]);

    return (
        <div className="container mx-auto max-w-7xl p-6">
            <section className="mb-8">
                <h3 className="text-3xl font-bold gradient-text mb-6">권한 관리 통계</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard title="총 사용자" value={stats.total} details={[{ label: '활성 계정', count: stats.active }, { label: '비활성 계정', count: stats.inactive }]} colorClass="text-blue-300" />
                    <StatCard title="관리자" value={stats.admins} details={[{ label: '슈퍼 관리자', count: stats.superAdmins }, { label: '일반 관리자', count: stats.normalAdmins }]} colorClass="text-purple-300" />
                    <StatCard title="스터디 리더" value={stats.leaders} details={[{ label: '활성 리더', count: stats.leaders }, { label: '승인 대기', count: 0 }]} colorClass="text-green-300" />
                    <StatCard title="일반 멤버" value={stats.members} details={[{ label: '신규 멤버', count: 1 }, { label: '기존 멤버', count: stats.members - 1 }]} colorClass="text-pink-300" />
                </div>
            </section>

            {/* Search and Filter Section - Simplified for brevity */}

            <section className="mb-8">
                <div className="widget-card rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-800"><tr><th className="p-4 text-left">프로필</th><th className="p-4 text-left">이름/닉네임</th><th className="p-4 text-left">현재 권한</th><th className="p-4 text-left">포지션</th><th className="p-4 text-left">기술 스택</th><th className="p-4 text-left">액션</th></tr></thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id} className="table-row">
                                        <td className="p-4"><img src={user.profileImage} alt={user.name} className="w-10 h-10 rounded-full" /></td>
                                        <td className="p-4"><div className="font-semibold text-white">{user.name}</div><div className="text-sm text-gray-400">@{user.nickname}</div></td>
                                        <td className="p-4"><PermissionBadge role={user.role} /></td>
                                        <td className="p-4">{user.position}</td>
                                        <td className="p-4"><div className="flex flex-wrap gap-1">{user.techStacks.map(tech => <TechTag key={tech} tech={tech} />)}</div></td>
                                        <td className="p-4"><div className="flex space-x-2"><button className="px-2 py-1 text-xs bg-blue-600 rounded"><i className="fas fa-user-shield"></i></button><button className="px-2 py-1 text-xs bg-green-600 rounded"><i className="fas fa-crown"></i></button><button className="px-2 py-1 text-xs bg-yellow-600 rounded"><i className="fas fa-user-minus"></i></button></div></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminPermission;
