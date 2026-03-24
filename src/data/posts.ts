export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string; // HTML allowed for rich text
  image?: string;
}

export const BLOG_POSTS: Post[] = [
  {
    slug: 'day-14-brain-healing-roadmap',
    title: 'Day 14 Brain Healing Proof: NoRelapse Biological Roadmap Explained',
    excerpt: 'The first two weeks feel like hell. See the scientific milestones that happen exactly on Day 14 and why the NoRelapse Roadmap is the key to recovery.',
    date: 'March 25, 2026',
    readTime: '5 min read',
    image: '/roadmap-day-14.png',
    content: `
      <p>The first two weeks of quitting PMO feel like hell. Friction is at its peak, and willpower is at its lowest. But science says something incredible starts happening right at the 2-week mark.</p>
      
      <h3>The Day 14 Milestone</h3>
      <p>Around <strong>Day 14</strong>, your brain’s prefrontal cortex begins the critical work of repairing <strong>dopamine receptors</strong>. These are the "receiving stations" for joy and motivation that were previously offline due to hyper-stimulation.</p>
      
      <p>When you reach this point:</p>
      <ul>
        <li><strong>Decision-making Power Returns</strong>: You no longer act purely on impulse.</li>
        <li><strong>Urges Become Weaker</strong>: The biological pressure starts to dissipate.</li>
        <li><strong>Cravings Lose Their Grip</strong>: Your baseline dopamine begins to stabilize.</li>
      </ul>

      <div style="margin: 40px 0; border: 1px solid var(--iron); border-radius: 12px; overflow: hidden; background: #000;">
        <img src="/roadmap-day-14.png" alt="NoRelapse Biological Roadmap Graph" style="width: 100%; display: block;" />
        <div style="padding: 15px; font-size: 0.9rem; color: var(-- ghost); text-align: center;">NoRelapse Warrior's Biological Roadmap Interface</div>
      </div>

      <p>NoRelapse Warrior’s <strong>Biological Roadmap</strong> tracks exactly that. It doesn’t just count streaks — it shows real brain healing milestones using proven neuroscience. It visualizes the battle within, giving you the clarity needed to cross the "Two-Week Rubicon."</p>
      
      <blockquote>"I’ve seen hundreds of warriors hit this milestone and say the same thing: 'It finally feels real.' The 14-day mark isn't just a number, it's a structural shift in your nervous system."</blockquote>

      <p>Download the free APK today and watch your own brain healing timeline unfold. Stop guessing, start measuring.</p>
    `
  }
];
