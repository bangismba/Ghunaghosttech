export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  category: string;
  order: number;
  status: 'published' | 'draft' | 'archived';
  featured: boolean;
  createdAt: any;
  updatedAt: any;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  read: boolean;
  replied: boolean;
  createdAt: any;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  tech: string[];
  category: string;
  order: number;
  status: 'published' | 'draft' | 'archived';
  createdAt: any;
  updatedAt: any;
}

export interface Founder {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  expertise: string[];
  location: string;
  status: 'published' | 'draft';
  createdAt: any;
  updatedAt: any;
}