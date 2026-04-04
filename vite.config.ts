import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'api-local-handler',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/send-lead-magnet' && req.method === 'POST') {
              console.log('Vite Dev: Intercepting /api/send-lead-magnet request...');
              
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', async () => {
                try {
                  const { name, email } = JSON.parse(body);
                  
                  // Use a simplified version of the API logic for local dev
                  const BREVO_API_KEY = env.BREVO_API_KEY || process.env.BREVO_API_KEY;
                  
                  if (!BREVO_API_KEY) {
                    res.statusCode = 500;
                    res.end(JSON.stringify({ error: 'BREVO_API_KEY missing in .env.local' }));
                    return;
                  }

                  // 1. Sync lead to Supabase
                  const SUPABASE_URL = 'https://aiicylzukkkhxcimsycb.supabase.co';
                  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpaWN5bHp1a2traHhjaW1zeWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxODUxNTksImV4cCI6MjA4ODc2MTE1OX0.uD_i-Wo_FwTZzut78Qwp_BZqAS7VDXSI4EXlHCPb2wY';
                  
                  console.log(`Vite Dev: Syncing lead to Supabase [${email}]...`);
                  try {
                    await fetch(`${SUPABASE_URL}/rest/v1/newsletter_leads`, {
                      method: 'POST',
                      headers: {
                        'apikey': SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                        'Content-Type': 'application/json',
                        'Prefer': 'return=minimal'
                      },
                      body: JSON.stringify({
                        email,
                        meta: { name, platform: 'web_lead_magnet_v2_dev', captured_at: new Date().toISOString() }
                      })
                    });
                  } catch (e) {
                    console.error('Supabase sync error:', e);
                  }

                  // 2. Fetch Latest Lead Magnet URL from Config
                  let leadMagnetUrl = 'https://norelapse.vercel.app/NoRelapse_Warrior_7Day_BattlePlan_V4_Interactive.pdf';
                  try {
                    const configRes = await fetch(`${SUPABASE_URL}/rest/v1/app_config?id=eq.global&select=warrior_settings`, {
                      headers: {
                        'apikey': SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                      }
                    });
                    const configs = await configRes.json();
                    if (configs?.[0]?.warrior_settings?.lead_magnet_url) {
                      leadMagnetUrl = configs[0].warrior_settings.lead_magnet_url;
                    }
                  } catch (e) {
                    console.error('Error fetching config:', e);
                  }

                  // 3. Call Brevo API
                  const SENDER_EMAIL = env.BREVO_SENDER_EMAIL || 'council@norelapse.app';
                  console.log(`Vite Dev: Sending from [${SENDER_EMAIL}] to [${email}]...`);
                  
                  const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
                    method: 'POST',
                    headers: {
                      'api-key': BREVO_API_KEY,
                      'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                      sender: { name: 'NoRelapse Warrior Council', email: SENDER_EMAIL },
                      to: [{ email, name }],
                      subject: "🔥 Warrior's 7-Day Battle Plan: Extraction Successful!",
                      htmlContent: `
                        <!DOCTYPE html>
                        <html>
                        <body style="margin: 0; padding: 0; background-color: #050505;">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #050505;">
                            <tr>
                              <td align="center" style="padding: 40px 0;">
                                <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #0a0812; border-radius: 16px; border: 1px solid #1e1b2e; overflow: hidden;">
                                  <tr>
                                    <td style="padding: 40px 40px 20px 40px; font-family: 'Inter', Helvetica, Arial, sans-serif; color: #ffffff;">
                                      <p style="color: #6366f1; font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 8px;">Mission Briefing (Dev Mode)</p>
                                      <h1 style="font-size: 28px; font-weight: 900; margin: 0; color: #ffffff; line-height: 1.2;">Recruitment Successful,<br />Warrior ${name}.</h1>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding: 0 40px 40px 40px; font-family: 'Inter', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #94a3b8;">
                                      <p style="margin-bottom: 24px;">
                                        You have taken the first step toward system-level discipline. As promised, your <b>7-Day Warrior Battle Plan</b> is ready for extraction.
                                      </p>
                                      <p style="margin-bottom: 24px; color: #ffffff; font-weight: 700;">
                                         💡 Important: Download and use the app from the website for better usage of the PDF and to track your streaks in real-time.
                                      </p>
                                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 40px 0;">
                                        <tr>
                                          <td align="center" style="padding-bottom: 20px;">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                              <tr>
                                                <td align="center" bgcolor="#4f46e5" style="border-radius: 8px;">
                                                  <a href="${leadMagnetUrl}" 
                                                     target="_blank"
                                                     style="display: inline-block; padding: 18px 36px; font-family: sans-serif; font-size: 16px; font-weight: 800; color: #ffffff; text-decoration: none; text-transform: uppercase; letter-spacing: 0.1em;">
                                                     DOWNLOAD BATTLE PLAN PDF
                                                  </a>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td align="center">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                              <tr>
                                                <td align="center" style="border-radius: 8px; border: 1px solid #6366f1;">
                                                  <a href="https://norelapse.vercel.app/#install" 
                                                     target="_blank"
                                                     style="display: inline-block; padding: 16px 32px; font-family: sans-serif; font-size: 14px; font-weight: 700; color: #6366f1; text-decoration: none; text-transform: uppercase; letter-spacing: 0.1em;">
                                                     GO TO WARRIOR DASHBOARD
                                                  </a>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                      <hr style="border: 0; border-top: 1px solid #1e1b2e; margin-bottom: 32px;" />
                                      <div style="text-align: center;">
                                        <p style="font-size: 12px; color: #475569; margin-bottom: 8px;">Local Dev Sync Mode</p>
                                        <p style="font-size: 12px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.1em;">Stay Focused. Stay Disciplined.</p>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </body>
                        </html>
                      `
                    })
                  });

                  if (brevoRes.ok) {
                    const successData = await brevoRes.json();
                    console.log('✅ BREVO SUCCESS:', successData);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ success: true, message: 'Local Dev Sync: Warrior briefed.' }));
                  } else {
                    const err = await brevoRes.json();
                    console.error('❌ BREVO API ERROR:', JSON.stringify(err, null, 2));
                    res.statusCode = 500;
                    res.end(JSON.stringify({ error: 'Brevo API error', details: err }));
                  }
                } catch (e) {
                  console.error('❌ VITE MIDDLEWARE CRASH:', e);
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: 'Internal Dev Server Error', message: e.message }));
                }
              });
              return;
            }
            next();
          });
        }
      }
    ],
  };
});
