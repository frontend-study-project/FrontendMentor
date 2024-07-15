import { PropsWithChildren } from 'react';

export default function DetailListItem({ children }: PropsWithChildren) {
  return (
    <li className="w-[50%] pb-[15px] text-[16px]">
      <span className="font-semibold">{children}</span>
    </li>
  );
}
