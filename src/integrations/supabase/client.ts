// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://lejhbkimfrpuiepgmuoa.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxlamhia2ltZnJwdWllcGdtdW9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0OTAyODIsImV4cCI6MjA2MDA2NjI4Mn0.FenMb84PhLw61WLj8AFBfJVdmr8Wyni4-12PRT2fNik";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);