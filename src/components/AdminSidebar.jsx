// src/components/AdminSidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.svg';

function AdminSidebar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <aside id="sidebar" className="sidebar flex-shrink-0 p-4">
            <div className="flex items-center space-x-3 mb-8 px-2">
                <img src={logo} alt="TCP 로고" className="w-10 h-10 object-contain" />
                <div>
                    <h1 className="orbitron text-xl font-bold gradient-text">TCP</h1>
                    <p className="text-xs text-gray-400">Admin Panel</p>
                </div>
            </div>

            <nav className="space-y-4">
                <div>
                    <h3 className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Dashboard</h3>
                    <Link to="/admin" className={`sidebar-link ${isActive('/admin') ? 'bg-gray-700 text-white' : ''}`}>
                        <i className="fas fa-home"></i><span className="ml-2">Overview</span>
                    </Link>
                </div>
                <div>
                    <h3 className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Page Management</h3>
                    <Link to="/admin/main" className={`sidebar-link ${isActive('/admin/main') ? 'bg-gray-700 text-white' : ''}`}>
                        <i className="fas fa-file-alt"></i><span className="ml-2">Main Page</span>
                    </Link>
                    <Link to="/admin/recruitment" className={`sidebar-link ${isActive('/admin/recruitment') ? 'bg-gray-700 text-white' : ''}`}>
                        <i className="fas fa-bullhorn"></i><span className="ml-2">Recruitment Page</span>
                    </Link>
                    <Link to="/admin/announcement" className={`sidebar-link ${isActive('/admin/announcement') ? 'bg-gray-700 text-white' : ''}`}>
                        <i className="fas fa-newspaper"></i><span className="ml-2">Announcement Page</span>
                    </Link>
                    <Link to="/admin/study" className={`sidebar-link ${isActive('/admin/study') ? 'bg-gray-700 text-white' : ''}`}>
                        <i className="fas fa-book"></i><span className="ml-2">Study Group Page</span>
                    </Link>
                    <Link to="/admin/projects" className={`sidebar-link ${isActive('/admin/projects') ? 'bg-gray-700 text-white' : ''}`}>
                        <i className="fas fa-project-diagram"></i><span className="ml-2">Project Team Page</span>
                    </Link>
                </div>
                <div>
                    <h3 className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Account Management</h3>
                    <Link to="/admin/permissions" className={`sidebar-link ${isActive('/admin/permissions') ? 'bg-gray-700 text-white' : ''}`}>
                        <i className="fas fa-user-shield"></i><span className="ml-2">Manage Permissions</span>
                    </Link>
                    <Link to="/admin/delete-accounts" className={`sidebar-link ${isActive('/admin/delete-accounts') ? 'bg-gray-700 text-white' : ''}`}>
                        <i className="fas fa-user-slash"></i><span className="ml-2">Delete Accounts</span>
                    </Link>
                    <Link to="/admin/modify-info" className={`sidebar-link ${isActive('/admin/modify-info') ? 'bg-gray-700 text-white' : ''}`}>
                        <i className="fas fa-database"></i><span className="ml-2">Modify Information</span>
                    </Link>
                </div>
                <div>
                    <h3 className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Application Management</h3>
                    <Link to="/admin/applications" className={`sidebar-link ${isActive('/admin/applications') ? 'bg-gray-700 text-white' : ''}`}>
                        <i className="fas fa-user-plus"></i><span className="ml-2">New Member Applications</span>
                    </Link>
                </div>
                <div>
                    <h3 className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Web Server Management</h3>
                    <Link to="/admin/server-tools" className={`sidebar-link ${isActive('/admin/server-tools') ? 'bg-gray-700 text-white' : ''}`}>
                        <i className="fas fa-server"></i><span className="ml-2">Server Tools</span>
                    </Link>
                </div>
            </nav>
        </aside>
    );
}

export default AdminSidebar;