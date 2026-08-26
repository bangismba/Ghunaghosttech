import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithEmail, loginWithGoogle, handleRedirectResult } from '@lib/firebase/auth';
import { Mail, Lock, Chrome, AlertCircle, CheckCircle } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Handle redirect result on page load
  useEffect(() => {
    const handleRedirect = async () => {
      const result = await handleRedirectResult();
      if (result?.success) {
        navigate('/admin');
      } else if (result?.error) {
        setError(`Google login failed: ${result.error}`);
      }
    };
    handleRedirect();
  }, [navigate]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const result = await loginWithEmail(email, password);
      if (result.success) {
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => navigate('/admin'), 1000);
      } else {
        setError(result.error || 'Invalid email or password');
      }
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        setError('No account found with this email');
      } else if (error.code === 'auth/wrong-password') {
        setError('Incorrect password');
      } else if (error.code === 'auth/invalid-email') {
        setError('Invalid email address');
      } else if (error.code === 'auth/user-disabled') {
        setError('This account has been disabled');
      } else if (error.code === 'auth/too-many-requests') {
        setError('Too many failed attempts. Please try again later');
      } else {
        setError(error.message || 'Invalid email or password');
      }
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setError('');
    setSuccess('');

    try {
      const result = await loginWithGoogle();
      if (result.success) {
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => navigate('/admin'), 1000);
      } else {
        if (result.code === 'auth/popup-closed-by-user') {
          setError('Sign-in popup was closed. Please try again.');
        } else if (result.code === 'auth/popup-blocked') {
          setError('Pop-up was blocked. Please allow pop-ups for this site.');
        } else {
          setError(result.error || 'Google login failed. Please try again.');
        }
      }
    } catch (error: any) {
      console.error('Google login error:', error);
      setError(error.message || 'Google login failed');
    } finally {
      setGoogleLoading(false);
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

          {success && (
            <div className="mb-4 p-3 border border-emerald-500/30 bg-emerald-500/5 flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <p className="font-mono text-sm text-emerald-400">{success}</p>
            </div>
          )}

          {error && (
            <div className="mb-4 p-3 border border-red-500/30 bg-red-500/5 flex items-start gap-3">
              <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="font-mono text-sm text-red-400">{error}</p>
            </div>
          )}

          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={googleLoading || loading}
            className="w-full flex items-center justify-center gap-3 border border-white/20 py-3 font-mono text-sm hover:bg-white/5 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Chrome className="h-5 w-5" />
            {googleLoading ? 'Signing in...' : 'Sign in with Google'}
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-[#080808] px-4 font-mono text-zinc-600">OR</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <label className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600 block mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 focus:border-white/30 outline-none transition"
                required
              />
            </div>

            <div>
              <label className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600 block mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 focus:border-white/30 outline-none transition"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading || googleLoading}
              className="w-full border border-white/30 py-3 font-mono text-sm hover:bg-white hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
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