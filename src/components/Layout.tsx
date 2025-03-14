import React from 'react';
import { BookOpen, Users, Building2, FileText, Settings, Menu, LogOut } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-xl font-semibold text-gray-800">Quản lý Nghiên cứu Khoa học</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Đăng xuất
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? 'w-64' : 'w-20'
          } transition-all duration-300 ease-in-out bg-white shadow-sm min-h-screen`}
        >
          <nav className="p-4 space-y-2">
            <NavItem to="/" icon={<BookOpen />} text="Đề tài nghiên cứu" collapsed={!isSidebarOpen} />
            <NavItem to="/staff" icon={<Users />} text="Cán bộ/Viên chức" collapsed={!isSidebarOpen} />
            <NavItem to="/AddStaff" icon={<Users />} text="Sinh viên" collapsed={!isSidebarOpen} />
            <NavItem to="/departments" icon={<Building2 />} text="Đơn vị" collapsed={!isSidebarOpen} />
            <NavItem to="/publications" icon={<FileText />} text="Bài báo" collapsed={!isSidebarOpen} />
            <NavItem to="/admin" icon={<Settings />} text="Quản trị" collapsed={!isSidebarOpen} />
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  collapsed: boolean;
  to: string;
}

function NavItem({ icon, text, collapsed, to }: NavItemProps) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <span className="text-gray-600">{icon}</span>
      {!collapsed && <span className="text-gray-700">{text}</span>}
    </Link>
  );
}