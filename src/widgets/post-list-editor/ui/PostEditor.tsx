import type { CreatePostData } from '@entities/posts/api/createPost';

import { BoldIcon } from '@shared/icons/BoldIcon';
import { BulletsIcon } from '@shared/icons/BulletsIcon';
import { ItalicIcon } from '@shared/icons/ItalicIcon';
import MicIcon from '@shared/icons/MicIcon';
import OrderedListIcon from '@shared/icons/OrderedListIcon';
import PlusIcon from '@shared/icons/PlusIcon';
import PostIcon from '@shared/icons/PostIcon';
import { SmileyIcon } from '@shared/icons/Smiley';
import { UnderlineIcon } from '@shared/icons/UnderlineIcon';
import VideoIcon from '@shared/icons/VideoIcon';
import { cn } from '@shared/lib/cn';
import { useNotImplemented } from '@shared/utils/hooks/useNotImplemented';

import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

const EditorButton = memo(
  ({
    icon: Icon,
    isActive,
    onClick,
  }: {
    icon: React.ComponentType<{ className?: string }>;
    isActive: boolean;
    onClick: () => void;
  }) => {
    return (
      <button
        type="button"
        className={`rounded transition-all duration-150 cursor-pointer p-0.5 ${
          !isActive ? 'hover:bg-gray-200 active:scale-95' : 'bg-white'
        }`}
        onClick={onClick}
      >
        <Icon className="w-5 h-5" />
      </button>
    );
  },
);

interface PostEditorProps {
  onAddPost?: (data: CreatePostData) => void;
}

export const PostEditor = memo(function PostEditor({ onAddPost }: PostEditorProps) {
  const [format, setFormat] = useState<'bold' | 'italic' | 'underline' | null>(null);
  const [listType, setListType] = useState<'ordered' | 'unordered' | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState('');

  const { notImplemented } = useNotImplemented();

  const editorRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback((e: MouseEvent) => {
    if (e.target instanceof Node && editorRef.current?.contains(e.target)) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  const handleSubmit = useCallback(() => {
    if (!content.trim() || !onAddPost) {
      return;
    }

    onAddPost({ content: content.trim() });
    setContent('');
    setIsExpanded(false);
  }, [content, onAddPost]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit],
  );

  const handleContentChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const handleSetFormat = useCallback((format: 'bold' | 'italic' | 'underline') => {
    setFormat(format);
    notImplemented();
  }, []);

  const handleSetListType = useCallback((listType: 'ordered' | 'unordered') => {
    setListType(listType);
    notImplemented();
  }, []);

  const formatHandlers = useMemo(
    () => ({
      bold: () => handleSetFormat('bold'),
      italic: () => handleSetFormat('italic'),
      underline: () => handleSetFormat('underline'),
    }),
    [handleSetFormat],
  );

  const listHandlers = useMemo(
    () => ({
      unordered: () => handleSetListType('unordered'),
      ordered: () => handleSetListType('ordered'),
    }),
    [handleSetListType],
  );

  return (
    <div className="bg-gray-50 rounded-3xl p-2 w-full max-w-2xl mx-auto" ref={editorRef}>
      <div
        className={cn(
          'rounded-2xl bg-white w-full border border-gray-200 group',
          'text-gray-800 shadow-sm transition-all duration-300 flex',
          'flex-col overflow-hidden group-focus-within:shadow-md relative',
        )}
      >
        <div
          className={cn('grid transition-all duration-200 ease-in-out', {
            'grid-rows-[1fr]': isExpanded,
            'grid-rows-[0fr]': !isExpanded,
          })}
        >
          <div className="overflow-hidden">
            <div className="flex items-center bg-gray-100 rounded-lg w-fit p-1 gap-2 ml-3 mt-3 mb-4">
              <EditorButton isActive={format === 'bold'} icon={BoldIcon} onClick={formatHandlers.bold} />

              <EditorButton isActive={format === 'italic'} icon={ItalicIcon} onClick={formatHandlers.italic} />

              <EditorButton isActive={format === 'underline'} icon={UnderlineIcon} onClick={formatHandlers.underline} />

              <div className="w-px h-5 bg-gray-200" />

              <EditorButton isActive={listType === 'unordered'} icon={BulletsIcon} onClick={listHandlers.unordered} />

              <EditorButton isActive={listType === 'ordered'} icon={OrderedListIcon} onClick={listHandlers.ordered} />
            </div>
          </div>
        </div>

        <div className="flex gap-2 px-3 py-2">
          <button className="w-5 h-5 text-gray-400 cursor-pointer" type="button" onClick={notImplemented}>
            <SmileyIcon width={20} height={20} />
          </button>
          <textarea
            className={cn(
              'flex-1 w-full resize-none outline-none text-sm placeholder-gray-400 bg-transparent transition-all duration-300',
              {
                'h-24': isExpanded,
                'h-5': !isExpanded,
              },
            )}
            placeholder="What's on your mind?"
            value={content}
            onChange={handleContentChange}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div
          className={cn('grid transition-all duration-300 ease-in-out', {
            'grid-rows-[1fr]': isExpanded,
            'grid-rows-[0fr]': !isExpanded,
          })}
        >
          <div className="overflow-hidden">
            <div className="h-px w-full bg-gray-200" />

            <div
              role="button"
              tabIndex={-1}
              className="flex items-center p-3 h-10 gap-3 cursor-pointer"
              onClick={notImplemented}
            >
              <PlusIcon className="text-neutral-500" width={16} height={16} />
              <VideoIcon className="text-neutral-500" width={16} height={16} />
              <MicIcon className="text-neutral-500" width={16} height={16} />
            </div>
          </div>
        </div>

        <button
          type="button"
          className={cn('absolute right-2 transition-all duration-200 ease-in-out', {
            'bottom-2': isExpanded,
            'bottom-1/2 translate-y-1/2': !isExpanded,
          })}
          onClick={handleSubmit}
          disabled={!content.trim()}
        >
          <PostIcon
            width={24}
            height={24}
            className={cn('transition-colors duration-200', content.trim() ? 'text-violet-800' : 'text-gray-400')}
          />
        </button>
      </div>
    </div>
  );
});
