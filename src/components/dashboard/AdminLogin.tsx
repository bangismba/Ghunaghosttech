import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithEmail, loginWithGoogle, onAuthChange } from '@lib/firebase/auth';
import { Chrome, Mail, Lock, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();

  // Check if already logged in
  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      if (user) {
        navigate('/admin');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const result = await loginWithEmail(email, password);
      if (result.success) {
        setSuccess('✅ Login successful! Redirecting...');
        setTimeout(() => navigate('/admin'), 1000);
      } else {
        // Handle specific Firebase auth errors
        if (result.code === 'auth/user-not-found') {
          setError('No account found with this email');
        } else if (result.code === 'auth/wrong-password') {
          setError('Incorrect password');
        } else if (result.code === 'auth/invalid-email') {
          setError('Invalid email address');
        } else if (result.code === 'auth/too-many-requests') {
          setError('Too many failed attempts. Please try again later');
        } else if (result.code === 'auth/network-request-failed') {
          setError('Network error. Please check your internet connection and try again.');
        } else {
          setError(result.error || 'Invalid email or password');
        }
      }
    } catch (error: any) {
      console.error('Login error:', error);
      setError(error.message || 'An unexpected error occurred');
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
        setSuccess('✅ Login successful! Redirecting...');
        setTimeout(() => navigate('/admin'), 1000);
      } else {
        if (result.code === 'auth/popup-closed-by-user') {
          setError('Sign-in popup was closed. Please try again.');
        } else if (result.code === 'auth/popup-blocked') {
          setError('Pop-up was blocked. Please allow pop-ups for this site.');
        } else if (result.code === 'auth/network-request-failed') {
          setError('Network error. Please check your internet connection and try again.');
        } else {
          setError(result.error || 'Google login failed');
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
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="font-mono text-2xl font-medium tracking-tight text-white">
              GHUNAGHOST
            </h1>
            <p className="font-mono text-xs uppercase tracking-wider text-white/40 mt-2">
              Admin Access
            </p>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-4 p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/5 flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-400">{success}</p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-4 rounded-lg border border-red-500/30 bg-red-500/5 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={googleLoading || loading}
            className="w-full flex items-center justify-center gap-3 border border-white/20 rounded-lg py-3 text-sm font-medium text-white hover:bg-white/5 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {googleLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Chrome className="h-5 w-5" />
            )}
            {googleLoading ? 'Signing in...' : 'Sign in with Google'}
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#080808] px-4 text-xs text-white/30 font-mono">OR</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-white/40 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#00d4ff]/50 outline-none transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-white/40 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#00d4ff]/50 outline-none transition"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || googleLoading}
              className="w-full flex items-center justify-center gap-2 bg-[#00d4ff] text-[#080808] font-medium rounded-lg py-3 hover:bg-[#00d4ff]/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Authenticating...
                </>
              ) : (
                'Login →'
              )}
            </button>
          </form>

          <p className="text-center font-mono text-[10px] text-white/20 mt-6">
            Secure access only
          </p>
        </div>
      </div>
    </div>
  );
}