import { PropsWithChildren } from 'react';

export default function ShadowBox({ children }: PropsWithChildren) {
  return (
    <li className="inline-block mr-[10px] px-[25px] py-[8px] shadow-md rounded-[5px] bg-white dark:bg-dark-blue dark:text-very-light-gray">
      {children}
    </li>
  );
}
