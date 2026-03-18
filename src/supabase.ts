import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://aiicylzukkkhxcimsycb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpaWN5bHp1a2traHhjaW1zeWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxODUxNTksImV4cCI6MjA4ODc2MTE1OX0.uD_i-Wo_FwTZzut78Qwp_BZqAS7VDXSI4EXlHCPb2wY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
