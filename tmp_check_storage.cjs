const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://aiicylzukkkhxcimsycb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpaWN5bHp1a2traHhjaW1zeWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxODUxNTksImV4cCI6MjA4ODc2MTE1OX0.uD_i-Wo_FwTZzut78Qwp_BZqAS7VDXSI4EXlHCPb2wY';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function listFiles() {
  const { data, error } = await supabase.storage.from('app-releases').list();
  if (error) {
    console.error('Error listing files:', error);
    return;
  }
  console.log('Files in app-releases:', data);
}

listFiles();
