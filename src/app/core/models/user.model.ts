export interface User {
  id: number;
  name: string;
  role: 'Admin' | 'Dev' | 'Manager';
  isActive: boolean;
}