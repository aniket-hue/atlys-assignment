import { LoginButton } from '@widgets/auth/ui/LoginButton';

import { LogoIcon } from '@shared/icons/LogoIcon';

export function Header() {
  return (
    <header className="w-full h-16 bg-white px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <LogoIcon className="size-6" />
        <span className="text-base font-bold">foo-rum</span>
      </div>

      <LoginButton />
    </header>
  );
}
