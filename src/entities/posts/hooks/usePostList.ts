import { useCallback, useEffect, useState } from 'react';
import { getPost } from '../api/getPost';
import { createPost, type CreatePostData } from '../api/createPost';
import type { Post } from '../types';

export function usePostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);

    try {
      const posts = await getPost();
      setPosts(posts);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addPost = useCallback(async (data: CreatePostData) => {
    try {
      /**
       * Backend call to create a new post and optimistic update the UI
       */

      const newPost = await createPost(data);
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    } catch (error) {
      setError(error as Error);
    }
  }, []);

  return { posts, isLoading, error, addPost };
}
