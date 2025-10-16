import { PostCard, PostCardShimmer } from '@widgets/post-list';
import { PostEditor } from '@widgets/post-list-editor';

import { usePostList } from '@entities/posts';

function App() {
  const { posts, isLoading } = usePostList();

  return (
    <div className="flex flex-col items-center justify-center gap-4 max-w-[600px] mx-auto pb-4 pt-24 scrollbar-hide">
      <PostEditor />

      <div className="flex flex-wrap flex-col items-center justify-center gap-4 w-full ">
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => <PostCardShimmer key={index} />)
          : posts.map((item) => (
              <PostCard
                key={item.name}
                content={item.content}
                src={item.src}
                name={item.name}
                createdAt={item.createdAt}
                emoji={item.emoji}
              />
            ))}
      </div>
    </div>
  );
}

export default App;
