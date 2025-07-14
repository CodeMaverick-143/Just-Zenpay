import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if environment variables are properly configured
if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('https://gvngdsdxlhxddywpuhog.supabase.co') || supabaseAnonKey.includes('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2bmdkc2R4bGh4ZGR5d3B1aG9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0OTc2OTksImV4cCI6MjA2ODA3MzY5OX0.3jMHsZG1f5WX6_xRvdxix5nOrRcTDO8TP_V_HEZFgHk')) {
  console.error('Supabase environment variables are not properly configured. Please update your .env file with actual Supabase credentials.');
  console.log('Expected format:');
  console.log('VITE_SUPABASE_URL=https://your-actual-project-id.supabase.co');
  console.log('VITE_SUPABASE_ANON_KEY=your-actual-anon-public-key');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);