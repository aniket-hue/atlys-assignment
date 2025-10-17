import { AuthProvider } from '@widgets/auth';
import { Header } from '@widgets/header';
import { PostCard, PostCardShimmer } from '@widgets/post-list';
import { PostEditor } from '@widgets/post-list-editor';

import { usePostList } from '@entities/posts';

import { useNotImplemented } from '@shared/utils/hooks/useNotImplemented';

function App() {
  const { posts, isLoading, addPost } = usePostList();
  const { notImplemented } = useNotImplemented();

  return (
    <AuthProvider>
      <Header />
      <div className="flex flex-col items-center justify-center gap-4 max-w-[600px] mx-auto pb-4 pt-24 scrollbar-hide">
        <PostEditor onAddPost={addPost} />

        <div className="flex flex-wrap flex-col items-center justify-center gap-4 w-full ">
          {isLoading
            ? Array.from({ length: 3 }, (_, index) => <PostCardShimmer key={`shimmer-${Date.now()}-${index}`} />)
            : posts.map((item, index) => (
                <PostCard
                  key={`post-${item.name}-${index}`}
                  content={item.content}
                  src={item.src}
                  name={item.name}
                  createdAt={item.createdAt}
                  emoji={item.emoji}
                  onLike={notImplemented}
                  onComment={notImplemented}
                  onSend={notImplemented}
                />
              ))}
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
