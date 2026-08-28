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
  Timestamp,
  DocumentData,
  QueryDocumentSnapshot
} from 'firebase/firestore';
import { db } from './config';
import { Project } from '@types';

const COLLECTION = 'projects';

// Get published projects (for public site)
export const getProjects = async (status: string = 'published'): Promise<Project[]> => {
  try {
    if (!db) {
      console.warn('Firebase not initialized, returning empty array');
      return [];
    }
    
    let q = query(collection(db, COLLECTION), orderBy('order', 'asc'));
    if (status) {
      q = query(q, where('status', '==', status));
    }
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
      id: doc.id,
      ...doc.data()
    })) as Project[];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

// Get all projects (for admin)
export const getAllProjects = async (): Promise<Project[]> => {
  try {
    if (!db) {
      console.warn('Firebase not initialized, returning empty array');
      return [];
    }
    
    const snapshot = await getDocs(collection(db, COLLECTION));
    return snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
      id: doc.id,
      ...doc.data()
    })) as Project[];
  } catch (error) {
    console.error('Error fetching all projects:', error);
    return [];
  }
};

// Add a new project
export const addProject = async (projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    const docRef = await addDoc(collection(db, COLLECTION), {
      ...projectData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding project:', error);
    return { success: false, error: error };
  }
};

// Update a project
export const updateProject = async (id: string, projectData: Partial<Project>) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    const docRef = doc(db, COLLECTION, id);
    await updateDoc(docRef, {
      ...projectData,
      updatedAt: Timestamp.now()
    });
    return { success: true };
  } catch (error) {
    console.error('Error updating project:', error);
    return { success: false, error: error };
  }
};

// Delete a project
export const deleteProject = async (id: string) => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    
    const docRef = doc(db, COLLECTION, id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error('Error deleting project:', error);
    return { success: false, error: error };
  }
};