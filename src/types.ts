export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  iconName: string;
  heroImage: string;
  goals: string[];
  audience: string;
  impactMetrics: {
    label: string;
    value: string;
  }[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  fullDescription: string;
  status: 'upcoming' | 'past';
  image: string;
  time?: string;
}

export interface NewsStory {
  id: string;
  title: string;
  category: 'Football' | 'Education' | 'Community' | 'Impact';
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Football' | 'Training' | 'Tournaments' | 'Education' | 'Community' | 'Events';
  image: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  image: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
