import { 
  collection, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc,
  query,
  orderBy,
  where,
  addDoc,
  Timestamp,
  DocumentData,
  QueryDocumentSnapshot
} from 'firebase/firestore';
import { db } from './config';
import { Message } from '@types';

const COLLECTION = 'messages';

export const getMessages = async (filter: 'all' | 'unread' | 'read' = 'all'): Promise<Message[]> => {
  try {
    if (!db) {
      console.warn('Firebase not initialized, returning empty array');
      return [];
    }
    
    let q = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'));
    if (filter === 'unread') {
      q = query(q, where('read', '==', false));
    } else if (filter === 'read') {
      q = query(q, where('read', '==', true));
    }
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
      id: doc.id,
      ...doc.data()
    })) as Message[];
  } catch (error) {
    console.error('Error fetching messages:', error);
    return [];
  }
};

export const markAsRead = async (id: string) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    const docRef = doc(db, COLLECTION, id);
    await updateDoc(docRef, { read: true });
    return { success: true };
  } catch (error) {
    console.error('Error marking message as read:', error);
    return { success: false, error: error };
  }
};

export const markAsReplied = async (id: string) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    const docRef = doc(db, COLLECTION, id);
    await updateDoc(docRef, { replied: true });
    return { success: true };
  } catch (error) {
    console.error('Error marking message as replied:', error);
    return { success: false, error: error };
  }
};

export const deleteMessage = async (id: string) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    const docRef = doc(db, COLLECTION, id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error('Error deleting message:', error);
    return { success: false, error: error };
  }
};

export const submitContactMessage = async (messageData: Omit<Message, 'id' | 'read' | 'replied' | 'createdAt'>) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    const docRef = await addDoc(collection(db, COLLECTION), {
      ...messageData,
      read: false,
      replied: false,
      createdAt: Timestamp.now()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting message:', error);
    return { success: false, error: error };
  }
};