import { Shimmer } from '../../../shared/ui/Shimmer';

export function PostCardShimmer() {
  return (
    <div className="bg-snow rounded-3xl p-2 w-full">
      <div className="rounded-2xl bg-white w-full h-full border border-gray-200 text-gray-800 p-3 shadow-sm transition-shadow">
        <div className="flex items-center gap-3">
          <Shimmer className="size-11 rounded-xl" />
          <div className="flex flex-col gap-1">
            <Shimmer className="w-24 text-base font-semibold" />
            <Shimmer className="w-16 text-xs font-medium" />
          </div>
        </div>

        <div className="flex gap-3 mt-3">
          <Shimmer className="size-7 rounded-full text-lg" />
          <div className="flex-1 flex flex-col gap-1">
            <Shimmer className="h-4 w-full" />
            <Shimmer className="h-4 w-1/3" />
          </div>
        </div>
      </div>
    </div>
  );
}
