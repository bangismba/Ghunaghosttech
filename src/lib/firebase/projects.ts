import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc,
  query,
  orderBy,
  where,
  Timestamp
} from 'firebase/firestore';
import { db } from './config';
import { Project } from '@types';

const COLLECTION = 'projects';

export const getProjects = async (status?: string) => {
  let q = query(collection(db, COLLECTION), orderBy('order', 'asc'));
  
  if (status) {
    q = query(q, where('status', '==', status));
  }
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Project[];
};

export const getAllProjects = async () => {
  const snapshot = await getDocs(collection(db, COLLECTION));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Project[];
};

export const addProject = async (projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...projectData,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  });
  return docRef.id;
};

export const updateProject = async (id: string, projectData: Partial<Project>) => {
  const docRef = doc(db, COLLECTION, id);
  await updateDoc(docRef, {
    ...projectData,
    updatedAt: Timestamp.now()
  });
};

export const deleteProject = async (id: string) => {
  const docRef = doc(db, COLLECTION, id);
  await deleteDoc(docRef);
};