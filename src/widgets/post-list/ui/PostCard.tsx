import { CommentIcon } from '@shared/icons/CommentIcon';
import { HeartIcon } from '@shared/icons/HeartIcon';
import { SendIcon } from '@shared/icons/SendIcon';
import { Avatar } from '@shared/ui/Avatar';

import type React from 'react';

function ActionButton({ icon: IconComponent, label }: { icon: React.ComponentType<any>; label: string }) {
  return (
    <button
      type="button"
      className="group relative rounded-full transition-all duration-200 ease-in-out active:scale-90 cursor-pointer"
      aria-label={label}
    >
      <IconComponent className="size-5.5 transition-all duration-200 ease-in-out filter group-hover:scale-110 group-hover:brightness-125" />
    </button>
  );
}

interface PostCardProps {
  content: string;
  src: string;
  name: string;
  createdAt: string;
  emoji: string;
}

export function PostCard(props: PostCardProps) {
  return (
    <div className="bg-snow rounded-3xl p-2 w-full">
      <div className="rounded-2xl bg-white w-full h-full border border-gray-200 text-gray-800 p-3 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-center gap-3">
          <Avatar src={props.src} name={props.name} className="size-11" />
          <div className="flex flex-col gap-1">
            <p className="text-base font-semibold">{props.name}</p>
            <p className="text-xs font-medium text-gray-400">{props.createdAt}</p>
          </div>
        </div>

        <div className="flex gap-3 mt-3">
          <div className="bg-gray-200 rounded-full flex items-center justify-center size-7 shrink-0 text-lg">
            {props.emoji}
          </div>
          <p className="flex-1 text-sm text-gray-700">{props.content}</p>
        </div>
      </div>

      <div className="flex items-center gap-6 ml-4 mt-3">
        <ActionButton icon={HeartIcon} label="Like" />
        <ActionButton icon={CommentIcon} label="Comment" />
        <ActionButton icon={SendIcon} label="Send" />
      </div>
    </div>
  );
}
