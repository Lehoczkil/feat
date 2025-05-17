export interface User {
  id: number;
  first_name: string;
  last_name: string;
  job_tile: string;
  features: Array<{
    color: string;
    title: string;
    description: string;
  }>;
}

export interface LoginCredentials {
  email: string
  password: string
}
