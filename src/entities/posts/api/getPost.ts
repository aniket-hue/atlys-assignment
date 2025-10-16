import { sleep } from '@shared/lib/sleep';

import type { Post } from '../types';

function generateRandomFeedData(count = 5) {
  const names = [
    'John Doe',
    'Jane Smith',
    'Alex Kim',
    'Maria Lopez',
    'Ethan Brown',
    'Olivia White',
    'Liam Patel',
    'Emma Davis',
  ];

  const emojis = ['😎', '😍', '😄', '😂', '🤩', '🥰', '😝', '😊', '😉', '😁'];

  const contents = [
    'Just finished an amazing project today! The team really pulled together to make it happen. Excited to share more soon.',
    'Loving the new design trends lately 🎨. Experimenting with gradients and soft shadows has been so much fun!',
    'Coffee + code = productivity ☕💻. Late nights and early mornings, but it’s worth it when everything finally works!',
    'Nature walk to clear my mind 🌿. Sometimes the best ideas come when you step away from the screen for a bit.',
    'Working on something cool, stay tuned! It’s taking longer than expected but I’m learning a ton along the way.',
    'Another productive day in the books 📚. Always grateful for opportunities to grow and build amazing things!',
    'Exploring new animation techniques in React today — Framer Motion is such a game changer!',
    'The best part of creating is seeing ideas come alive. Taking a step back to appreciate the small wins. 💫',
  ];

  const randomTime = () => {
    const hours = Math.floor(Math.random() * 12) + 1;
    const minutes = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    const ampm = Math.random() > 0.5 ? 'AM' : 'PM';
    return `${hours}:${minutes} ${ampm}`;
  };

  const randomImage = (i: number) => `https://picsum.photos/seed/feed${i}/400/400`;

  return Array.from({ length: count }, (_, i) => ({
    content: contents[Math.floor(Math.random() * contents.length)],
    src: randomImage(i),
    name: names[Math.floor(Math.random() * names.length)],
    createdAt: randomTime(),
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
  }));
}

export async function getPost(): Promise<Post[]> {
  await sleep(1000);
  return generateRandomFeedData(5);
}
