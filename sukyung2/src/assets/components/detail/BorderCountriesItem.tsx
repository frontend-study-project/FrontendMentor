import { PropsWithChildren } from 'react';

export default function BorderCountriesItem({ children }: PropsWithChildren) {
  return (
    <li className="inline-block mr-[10px] px-[25px] py-[8px] shadow-md rounded-[5px] bg-white">
      {children}
    </li>
  );
}
