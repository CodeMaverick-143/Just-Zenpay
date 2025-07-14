import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if environment variables are properly configured
if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project-id') || supabaseAnonKey.includes('your-anon-public-key')) {
  console.error('Supabase environment variables are not properly configured. Please update your .env file with actual Supabase credentials.');
  console.log('Expected format:');
  console.log('VITE_SUPABASE_URL=https://your-actual-project-id.supabase.co');
  console.log('VITE_SUPABASE_ANON_KEY=your-actual-anon-public-key');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);