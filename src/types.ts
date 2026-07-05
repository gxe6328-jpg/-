export interface Booking {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  comment?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export interface TestOption {
  text: string;
  score: number;
}

export interface TestQuestion {
  id: number;
  text: string;
  options: TestOption[];
}

export interface TestResult {
  minScore: number;
  maxScore: number;
  title: string;
  level: "low" | "medium" | "high";
  description: string;
  recommendation: string;
}
