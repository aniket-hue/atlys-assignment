import { useEffect, useState } from 'react';
import { getPost } from '../api/getPost';
import type { Post } from '../types';

export function usePostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setIsLoading(true);

    try {
      const posts = await getPost();
      setPosts(posts);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }

  return { posts, isLoading, error };
}
