import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  bold: string;
}
export default function BoldText({ bold, children }: Props) {
  return (
    <li className="w-full pb-[15px] text-[16px]">
      <span className="font-semibold">{bold}</span>
      {children}
    </li>
  );
}
