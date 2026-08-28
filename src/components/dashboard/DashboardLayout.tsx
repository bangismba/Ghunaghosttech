import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { onAuthChange, logoutUser } from '@lib/firebase/auth';
import { 
  LayoutDashboard, 
  FolderGit, 
  MessageSquare, 
  LogOut,
  User,
  Chrome
} from 'lucide-react';

export default function DashboardLayout() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      if (user) {
        setUser(user);
        setLoading(false);
        console.log('✅ User logged in:', user.email);
      } else {
        setLoading(false);
        navigate('/admin/login');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    const result = await logoutUser();
    if (result.success) {
      navigate('/admin/login');
    }
  };

  const navItems = [
    { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/admin/projects', icon: FolderGit, label: 'Projects' },
    { href: '/admin/messages', icon: MessageSquare, label: 'Messages' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[#00d4ff] border-t-transparent rounded-full animate-spin" />
          <p className="text-white/40 font-mono text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 border-r border-white/5 bg-[#0f0f0f] z-50 overflow-y-auto">
        <div className="p-6 border-b border-white/5">
          <h1 className="font-mono text-lg font-medium tracking-tight text-white">
            GHUNAGHOST
          </h1>
          <p className="font-mono text-[10px] uppercase tracking-wider text-white/30 mt-1">
            Admin Panel
          </p>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 font-mono text-sm rounded-lg transition ${
                  isActive 
                    ? 'bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20' 
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </a>
            );
          })}
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full font-mono text-sm text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/5">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="Avatar" className="h-8 w-8 rounded-full" />
              ) : (
                <User className="h-4 w-4 text-white/40" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-mono text-xs truncate text-white/60">
                {user?.displayName || user?.email || 'Admin'}
              </p>
              <p className="font-mono text-[8px] uppercase tracking-wider text-white/20">
                {user?.providerData?.[0]?.providerId === 'google.com' ? 'Google' : 'Email'} Account
              </p>
            </div>
            {user?.providerData?.[0]?.providerId === 'google.com' && (
              <Chrome className="h-3 w-3 text-white/20" />
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}