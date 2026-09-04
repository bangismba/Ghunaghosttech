import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithEmail, onAuthChange } from '@lib/firebase/auth';
import { Mail, Lock, AlertCircle, CheckCircle, Loader2, Shield, Eye, EyeOff } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState(0);
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

  // Lockout timer
  useEffect(() => {
    if (isLocked && lockTimer > 0) {
      const timer = setTimeout(() => setLockTimer(lockTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else if (lockTimer === 0 && isLocked) {
      setIsLocked(false);
      setAttempts(0);
    }
  }, [isLocked, lockTimer]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if locked
    if (isLocked) {
      setError(`Too many attempts. Please wait ${lockTimer} seconds.`);
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const result = await loginWithEmail(email, password);
      
      if (result.success) {
        setSuccess('Login successful! Redirecting...');
        setAttempts(0);
        setTimeout(() => navigate('/admin'), 1000);
      } else {
        // Increment failed attempts
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        
        // Lock after 5 failed attempts
        if (newAttempts >= 5) {
          setIsLocked(true);
          setLockTimer(30);
          setError('Too many failed attempts. Please wait 30 seconds.');
        } else {
          // Generic error message - never expose Firebase details
          setError('Invalid credentials. Please try again.');
        }
      }
    } catch (error: any) {
      // Always show generic error - never expose stack traces
      setError('Invalid credentials. Please try again.');
      console.error('Login error'); // Log without exposing details
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d4ff]/3 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-8 shadow-2xl shadow-[#00d4ff]/5">
          
          {/* Security Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-[10px] font-mono tracking-wider">
              <Shield className="h-3 w-3" />
              Secure Connection
            </div>
          </div>

          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img 
                src="/logo1.png" 
                alt="Ghunaghost Tech" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <h1 className="font-mono text-2xl font-medium tracking-tight text-[var(--text-primary)]">
              Admin Access
            </h1>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] mt-2">
              Secure authentication required
            </p>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-4 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 flex items-start gap-3 animate-fade-in-up">
              <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-400">{success}</p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-4 rounded-xl border border-red-500/30 bg-red-500/5 flex items-start gap-3 animate-fade-in-up">
              <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          {/* Attempts Indicator */}
          {attempts > 0 && !isLocked && (
            <div className="mb-4 text-center">
              <span className="text-[10px] font-mono text-[var(--text-muted)]">
                {5 - attempts} attempt{5 - attempts !== 1 ? 's' : ''} remaining
              </span>
            </div>
          )}

          {/* Lock Timer */}
          {isLocked && (
            <div className="mb-4 text-center">
              <span className="text-[10px] font-mono text-yellow-400">
                ⏳ {lockTimer}s until retry
              </span>
            </div>
          )}

          {/* Email/Password Form */}
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--text-muted)] mb-1.5">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)] group-focus-within:text-[#00d4ff] transition-colors" />
                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl pl-10 pr-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[#00d4ff]/50 outline-none transition-all duration-300"
                  required
                  disabled={isLocked}
                />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-full scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300" />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--text-muted)] mb-1.5">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-muted)] group-focus-within:text-[#00d4ff] transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl pl-10 pr-12 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[#00d4ff]/50 outline-none transition-all duration-300"
                  required
                  disabled={isLocked}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-full scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || isLocked}
              className="relative w-full group overflow-hidden rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] py-3.5 font-mono text-sm text-white hover:shadow-lg hover:shadow-[#00d4ff]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  'Login →'
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-50" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="font-mono text-[10px] text-[var(--text-muted)]">
              Secure access only • All attempts are logged
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}