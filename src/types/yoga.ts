
import type { Database } from '@/integrations/supabase/types';

export interface ClassType {
  id: string;
  title: string;
  description: string | null;
  location: string;
}

export interface ClassTime {
  id: string;
  class_id: string;
  date: string;
  start_time: string;
  end_time: string;
  available_spots: number;
  class: ClassType; // Joined class data
}

// Derived from Supabase types
export type ClassRow = Database['public']['Tables']['classes']['Row'];
export type ClassTimeRow = Database['public']['Tables']['class_times']['Row'];
