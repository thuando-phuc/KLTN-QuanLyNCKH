export interface Staff {
  id: string;
  fullName: string;
  idNumber: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  position: string;
  department: string;
  employmentStatus: 'active' | 'inactive';
  email: string;
  phone: string;
  officeLocation: string;
  photoUrl: string;
}

export interface Student {
  id: string;
  fullName: string;
  studentId: string;
  department: string;
  researchProjects: ResearchProject[];
  performance: number;
}

export interface Department {
  id: string;
  name: string;
  head: string;
  researchOutput: number;
  studentCount: number;
  staffCount: number;
  budget: number;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  department: string;
  status: 'published' | 'in-review' | 'draft';
  citations: number;
  publishedDate?: string;
  journal?: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  department: string;
  status: 'active' | 'completed' | 'pending';
  startDate: string;
  endDate: string;
  participants: string[];
}