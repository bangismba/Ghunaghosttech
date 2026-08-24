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
  Timestamp
} from 'firebase/firestore';
import { db } from './config';
import { Message } from '@types';

const COLLECTION = 'messages';

export const getMessages = async (filter: 'all' | 'unread' | 'read' = 'all') => {
  let q = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'));
  
  if (filter === 'unread') {
    q = query(q, where('read', '==', false));
  } else if (filter === 'read') {
    q = query(q, where('read', '==', true));
  }
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Message[];
};

export const markAsRead = async (id: string) => {
  const docRef = doc(db, COLLECTION, id);
  await updateDoc(docRef, { read: true });
};

export const markAsReplied = async (id: string) => {
  const docRef = doc(db, COLLECTION, id);
  await updateDoc(docRef, { replied: true });
};

export const deleteMessage = async (id: string) => {
  const docRef = doc(db, COLLECTION, id);
  await deleteDoc(docRef);
};

export const submitContactMessage = async (messageData: Omit<Message, 'id' | 'read' | 'replied' | 'createdAt'>) => {
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...messageData,
    read: false,
    replied: false,
    createdAt: Timestamp.now()
  });
  return docRef.id;
};