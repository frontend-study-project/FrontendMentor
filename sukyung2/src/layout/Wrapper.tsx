import React from 'react';
import Header from './Header';

type WrapperProps = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="w-full overflow-x-auto">
      <Header />
      <main className="min-h-[100vh] pt-[80px] bg-very-light-gray dark:bg-d-very-dark-blue">
        <div className="max-w-[1440px] md:min-w-[465px] w-full mx-auto my-0 box-border">
          {children}
        </div>
      </main>
    </div>
  );
}
