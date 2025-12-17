export interface Track {
  id: string;
  title: string;
  description: string;
  duration: string;
  tags: string[];
  coverUrl?: string; // Optional placeholder for now
  sunoUrl?: string;
}

export interface OracleState {
  status: 'idle' | 'listening' | 'thinking' | 'speaking' | 'error';
  query: string;
  response: string | null;
}

export interface VisualItem {
  id: number;
  url: string;
  alt: string;
}