import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { TwitterApi } from 'npm:twitter-api-v2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY')

// Twitter Keys (You must add these to Supabase Secrets)
const appKey = Deno.env.get('TWITTER_API_KEY')
const appSecret = Deno.env.get('TWITTER_API_SECRET')
const accessToken = Deno.env.get('TWITTER_ACCESS_TOKEN')
const accessSecret = Deno.env.get('TWITTER_ACCESS_SECRET')

Deno.serve(async (req) => {
  const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!)

  // 1. Check if user clicked "RUN" on our Dashboard
  const { data: settings } = await supabase
    .from('twitter_automation_settings')
    .select('*')
    .single()

  if (settings?.status !== 'active') {
    return new Response(JSON.stringify({ status: 'Automation is paused' }), { status: 200 })
  }

  // 2. Generate Content with Gemini
  const prompt = `Write a short, engaging tweet about this niche: "${settings.niche}". 
                  Make it witty and under 240 characters. 
                  Don't use hashtags unless they are very relevant.`
  
  const genAIResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  })
  
  const aiResult = await genAIResponse.json()
  const tweetContent = aiResult.candidates[0].content.parts[0].text

  // 3. Post to X (Twitter)
  const client = new TwitterApi({ appKey, appSecret, accessToken, accessSecret })
  
  try {
    const tweet = await client.v2.tweet(tweetContent)
    
    // 4. Log the post
    await supabase.from('twitter_posts_log').insert({ content: tweetContent, status: 'success' })
    
    return new Response(JSON.stringify({ message: 'Tweet Posted!', tweet: tweetContent }), { status: 200 })
  } catch (err) {
    console.error('Error posting tweet:', err)
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
})
