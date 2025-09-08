import React, { useState, useMemo } from 'react';

const sampleUsers = [
    { id: 1, name: '김민준', nickname: 'kimminjun', role: 'Admin', position: 'Frontend', techStacks: ['React', 'JavaScript'], profileImage: 'https://via.placeholder.com/40/A8C5E6/FFFFFF?text=김', joinDate: '2023-03-15', lastActive: '2024-01-15' },
    { id: 2, name: '이서연', nickname: 'leeseoyeon', role: 'Study Leader', position: 'AI', techStacks: ['Python', 'TensorFlow'], profileImage: 'https://via.placeholder.com/40/C5A8E6/FFFFFF?text=이', joinDate: '2023-05-20', lastActive: '2024-01-14' },
    { id: 3, name: '박지훈', nickname: 'parkjihun', role: 'Member', position: 'Backend', techStacks: ['Java', 'Spring'], profileImage: 'https://via.placeholder.com/40/A8E6C5/FFFFFF?text=박', joinDate: '2023-04-10', lastActive: '2024-01-13' },
];

const PermissionBadge = ({ role }) => {
    const roleClass = { Admin: 'permission-admin', 'Study Leader': 'permission-leader', Member: 'permission-member' }[role];
    return <span className={`permission-badge ${roleClass}`}>{role}</span>;
};

const TechTag = ({ tech }) => <span className="tech-tag">{tech}</span>;

const DeleteModal = ({ user, onClose, onConfirm }) => {
    if (!user) return null;
    return (
        <div className="modal show">
            <div className="modal-content">
                <h3 className="text-xl font-bold text-red-400 mb-4">계정 삭제 확인</h3>
                <p>정말로 {user.name} 계정을 삭제하시겠습니까?</p>
                <div className="flex justify-end space-x-3 mt-6">
                    <button className="btn-secondary" onClick={onClose}>취소</button>
                    <button className="btn-danger" onClick={() => onConfirm(user.id)}><i className="fas fa-trash mr-2"></i>삭제</button>
                </div>
            </div>
        </div>
    );
};

const AdminDeleteAccount = () => {
    const [users, setUsers] = useState(sampleUsers);
    const [userToDelete, setUserToDelete] = useState(null);

    const confirmDelete = (id) => {
        setUsers(prev => prev.filter(u => u.id !== id));
        setUserToDelete(null);
    };

    return (
        <div className="container mx-auto max-w-7xl p-6">
            <section className="mb-8">
                <h3 className="text-3xl font-bold gradient-text mb-6">계정 검색 및 삭제</h3>
                {/* Search and filter UI can be added here */}
            </section>

            <section className="mb-8">
                <div className="widget-card rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-800"><tr><th className="p-4 text-left">프로필</th><th className="p-4 text-left">이름/닉네임</th><th className="p-4 text-left">권한 역할</th><th className="p-4 text-left">기술 스택</th><th className="p-4 text-center">작업</th></tr></thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id} className="table-row">
                                        <td className="p-4"><img src={user.profileImage} alt={user.name} className="w-12 h-12 rounded-full" /></td>
                                        <td className="p-4">
                                            <div className="font-semibold text-white">{user.name}</div>
                                            <div className="text-sm text-gray-400">@{user.nickname}</div>
                                            <div className="text-xs text-gray-500 mt-1">가입: {user.joinDate} / 활동: {user.lastActive}</div>
                                        </td>
                                        <td className="p-4"><PermissionBadge role={user.role} /></td>
                                        <td className="p-4"><div className="flex flex-wrap gap-1">{user.techStacks.map(tech => <TechTag key={tech} tech={tech} />)}</div></td>
                                        <td className="p-4 text-center"><button className="btn-danger btn-small" onClick={() => setUserToDelete(user)}><i className="fas fa-trash mr-1"></i>삭제</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <DeleteModal user={userToDelete} onClose={() => setUserToDelete(null)} onConfirm={confirmDelete} />
        </div>
    );
};

export default AdminDeleteAccount;