import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithEmail } from '@lib/firebase/auth';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await loginWithEmail(email, password);
      navigate('/admin');
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        setError('No account found with this email');
      } else if (error.code === 'auth/wrong-password') {
        setError('Incorrect password');
      } else {
        setError('Invalid email or password');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="border border-white/10 p-8">
          <div className="text-center mb-8">
            <h1 className="font-mono text-2xl font-medium tracking-tight">GHUNAGHOST</h1>
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500 mt-2">
              Admin Access
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 focus:border-white/30 outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 focus:border-white/30 outline-none"
              required
            />

            {error && (
              <p className="font-mono text-sm text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full border border-white/30 py-3 font-mono text-sm hover:bg-white hover:text-black transition disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Login →'}
            </button>
          </form>

          <p className="text-center font-mono text-[10px] text-zinc-600 mt-6">
            Secure access only
          </p>
        </div>
      </div>
    </div>
  );
}