import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from './config';

// Login with email and password
export const loginWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error: any) {
    console.error('❌ Login error:', error);
    return { success: false, error: error.message, code: error.code };
  }
};

// Login with Google
export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    const result = await signInWithPopup(auth, provider);
    return { success: true, user: result.user };
  } catch (error: any) {
    console.error('❌ Google login error:', error);
    return { success: false, error: error.message, code: error.code };
  }
};

// Logout
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error: any) {
    console.error('❌ Logout error:', error);
    return { success: false, error: error.message };
  }
};

// Reset password
export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error: any) {
    console.error('❌ Password reset error:', error);
    return { success: false, error: error.message };
  }
};

// Auth state listener
export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Get current user
export const getCurrentUser = () => {
  return auth.currentUser;
};

// Check if authenticated
export const isAuthenticated = () => {
  return !!auth.currentUser;
};