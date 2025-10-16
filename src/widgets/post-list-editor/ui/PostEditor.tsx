import { BoldIcon } from '@shared/icons/BoldIcon';
import { BulletsIcon } from '@shared/icons/BulletsIcon';
import { ItalicIcon } from '@shared/icons/ItalicIcon';
import PostIcon from '@shared/icons/PostIcon';
import { SmileyIcon } from '@shared/icons/Smiley';
import { UnderlineIcon } from '@shared/icons/UnderlineIcon';
import { cn } from '@shared/lib/cn';

import { useState } from 'react';

const EditorButton = ({ icon: Icon, isActive, onClick }: { icon: any; isActive: boolean; onClick: () => void }) => {
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
};

export function PostEditor() {
  const [format, setFormat] = useState<'bold' | 'italic' | 'underline' | null>(null);
  const [listType, setListType] = useState<'ordered' | 'unordered' | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-50 rounded-3xl p-2 w-full max-w-2xl mx-auto ">
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
              <EditorButton
                isActive={format === 'bold'}
                icon={BoldIcon}
                onClick={() => setFormat(format === 'bold' ? null : 'bold')}
              />

              <EditorButton
                isActive={format === 'italic'}
                icon={ItalicIcon}
                onClick={() => setFormat(format === 'italic' ? null : 'italic')}
              />

              <EditorButton
                isActive={format === 'underline'}
                icon={UnderlineIcon}
                onClick={() => setFormat(format === 'underline' ? null : 'underline')}
              />

              <div className="w-px h-5 bg-gray-200" />

              <EditorButton
                isActive={listType === 'unordered'}
                icon={BulletsIcon}
                onClick={() => setListType(listType === 'unordered' ? null : 'unordered')}
              />

              <EditorButton
                isActive={listType === 'ordered'}
                icon={BulletsIcon}
                onClick={() => setListType(listType === 'ordered' ? null : 'ordered')}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2 px-3 py-2">
          <SmileyIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <textarea
            className={cn(
              'flex-1 w-full resize-none outline-none text-sm placeholder-gray-400 bg-transparent transition-all duration-300',
              {
                'h-24': isExpanded,
                'h-5': !isExpanded,
              },
            )}
            placeholder="What's on your mind?"
            onFocus={() => setIsExpanded(true)}
            onBlur={() => setIsExpanded(false)}
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
            <div className="flex items-center p-3 h-10"></div>
          </div>
        </div>

        <button
          type="button"
          className={cn('absolute right-2 transition-all duration-200 ease-in-out', {
            'bottom-2': isExpanded,
            'bottom-1/2 translate-y-1/2': !isExpanded,
          })}
        >
          <PostIcon width={24} height={24} className="text-violet-800" />
        </button>
      </div>
    </div>
  );
}
