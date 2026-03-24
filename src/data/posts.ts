export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string; // HTML allowed for rich text
}

export const BLOG_POSTS: Post[] = [
  {
    slug: 'the-science-of-porn-addiction',
    title: 'The Science of Porn Addiction: How it Rewires Your Brain',
    excerpt: 'Understand how dopamine receptors are affected by hyper-stimulation and how NoRelapse helps them recover.',
    date: 'March 24, 2026',
    readTime: '6 min read',
    content: `
      <h2>Dopamine & Your Nervous System</h2>
      <p>Pornography is a super-stimulus. It floods the brain with dopamine levels the human body never evolved to handle. This causes your receptors to down-regulate, making normal life feel gray and boring.</p>
      <p>The NoRelapse Warrior system isn't just an app; it's a shield that allows your dopamine baseline to return to normal.</p>
      <h3>The Recovery Roadmap</h3>
      <p>1. Phase 1: Complete Blockage (No willpower required).<br/>2. Phase 2: Neural Plasticity kicks in.<br/>3. Phase 3: Dopamine baseline restoration.</p>
    `
  }
];
