import { createClient } from '@supabase/supabase-js';

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

export default async function handler(req: any, res: any) {
  // 1. Method Restriction
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // 2. Input Validation
  const { name, email } = req.body;
  if (!email || !name) {
    return res.status(400).json({ error: 'Warrior Name and Email are required for activation.' });
  }

  // 3. Secrets Initialization
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const SUPABASE_URL = 'https://aiicylzukkkhxcimsycb.supabase.co';
  
  // Use public anon key for insertion as standard for newsletter leads
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpaWN5bHp1a2traHhjaW1zeWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxODUxNTksImV4cCI6MjA4ODc2MTE1OX0.uD_i-Wo_FwTZzut78Qwp_BZqAS7VDXSI4EXlHCPb2wY';

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  try {
    // 4. Log to Supabase (Maintain local database records)
    await supabase.from('newsletter_leads').insert({
      email,
      meta: { 
        name, 
        platform: 'web_lead_magnet_v2', 
        captured_at: new Date().toISOString() 
      }
    });

    // 5. Fetch Latest Lead Magnet URL from Config
    const { data: config } = await supabase.from('app_config').select('warrior_settings').eq('id', 'global').single();
    const leadMagnetUrl = config?.warrior_settings?.lead_magnet_url || 'https://norelapse.vercel.app/NoRelapse_Warrior_7Day_BattlePlan_V4_Interactive.pdf';

    // 6. Send Transactional Email via Brevo
    console.log(`Initiating Brevo transmission for: ${email}`);
    const SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'council@norelapse.app';
    
    const emailRes = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY || '',
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
                    <!-- Header -->
                    <tr>
                      <td style="padding: 40px 40px 20px 40px; font-family: 'Inter', Helvetica, Arial, sans-serif; color: #ffffff;">
                        <p style="color: #6366f1; font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 8px;">Mission Briefing</p>
                        <h1 style="font-size: 28px; font-weight: 900; margin: 0; color: #ffffff; line-height: 1.2;">Recruitment Successful,<br />Warrior ${name}.</h1>
                      </td>
                    </tr>
                    
                    <!-- Body Content -->
                    <tr>
                      <td style="padding: 0 40px 40px 40px; font-family: 'Inter', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #94a3b8;">
                        <p style="margin-bottom: 24px;">
                          You have taken the first step toward system-level discipline. As promised, your <b>7-Day Warrior Battle Plan</b> is ready for extraction.
                        </p>

                        <p style="margin-bottom: 24px; color: #ffffff; font-weight: 700;">
                           💡 Important: Download and use the app from the website for better usage of the PDF and to track your streaks in real-time.
                        </p>
                        
                        <!-- CTA Buttons -->
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
                        
                        <p style="font-size: 14px; color: #64748b; font-style: italic; border-left: 3px solid #4f46e5; padding-left: 16px; margin: 40px 0;">
                          "The enemy does not respect a passcode you set yourself. It respects a wall you cannot tear down."
                        </p>
                        
                        <hr style="border: 0; border-top: 1px solid #1e1b2e; margin-bottom: 32px;" />
                        
                        <!-- Footer -->
                        <div style="text-align: center;">
                          <p style="font-size: 12px; color: #475569; margin-bottom: 8px;">You are receiving this because you joined the NoRelapse Vanguard.</p>
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
        `,
      }),
    });

    if (!emailRes.ok) {
        const errorData = await emailRes.json();
        console.error('Brevo API Error Transmission Failed:', errorData);
        // Fail silently to user but log error for admin
    }

    return res.status(200).json({ success: true, message: 'Warrior briefed successfully. Check your secure comms (Inbox/Spam).' });

  } catch (error: any) {
    console.error('Lead Magnet Request Fatal Error:', error);
    return res.status(500).json({ error: 'System error. Contact the High Council if persistent.' });
  }
}
