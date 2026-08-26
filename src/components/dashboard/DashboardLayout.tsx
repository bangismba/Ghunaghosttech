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
      } else {
        navigate('/admin/login');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await logoutUser();
    navigate('/admin/login');
  };

  const navItems = [
    { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/admin/projects', icon: FolderGit, label: 'Projects' },
    { href: '/admin/messages', icon: MessageSquare, label: 'Messages' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#080808]">
        <div className="text-zinc-500 font-mono text-sm animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <aside className="fixed top-0 left-0 h-full w-64 border-r border-white/10 bg-black/50 backdrop-blur-xl z-50 overflow-y-auto">
        <div className="p-6 border-b border-white/10">
          <h1 className="font-mono text-lg font-medium tracking-tight">GHUNAGHOST</h1>
          <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mt-1">
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
                className={`flex items-center gap-3 px-4 py-3 font-mono text-sm transition ${
                  isActive 
                    ? 'bg-white/5 border border-white/10 text-white' 
                    : 'text-zinc-500 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </a>
            );
          })}
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full font-mono text-sm text-zinc-500 transition hover:text-white hover:bg-white/5"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="Avatar" className="h-8 w-8 rounded-full" />
              ) : (
                <User className="h-4 w-4 text-zinc-500" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-mono text-xs truncate text-zinc-300">
                {user?.displayName || user?.email || 'Admin'}
              </p>
              <p className="font-mono text-[8px] uppercase tracking-wider text-zinc-600">
                {user?.providerData?.[0]?.providerId === 'google.com' ? 'Google' : 'Email'} Account
              </p>
            </div>
            {user?.providerData?.[0]?.providerId === 'google.com' && (
              <Chrome className="h-3 w-3 text-zinc-600" />
            )}
          </div>
        </div>
      </aside>

      <main className="ml-64 min-h-screen">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}