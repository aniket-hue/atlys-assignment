import { sleep } from '@shared/lib/sleep';

import type { Post } from '../types';

export interface CreatePostData {
  content: string;
}

export async function createPost(data: CreatePostData): Promise<Post> {
  await sleep(500); // Simulate API delay

  const newPost: Post = {
    content: data.content,
    src: 'https://picsum.photos/seed/aniket/400/400', // Fixed avatar for Aniket Saxena
    name: 'Aniket Saxena',
    createdAt: new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }),
    emoji: '😊', // Default emoji
  };

  return newPost;
}
