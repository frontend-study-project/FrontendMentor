import React from 'react';
import Header from './Header';

type WrapperProps = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div>
      <Header />
      <main className="min-h-[100vh] pt-[80px] bg-very-light-gray dark:bg-d-very-dark-blue">
        <div className="max-w-[1440px] mx-auto my-0 px-[40px] box-border">
          {children}
        </div>
      </main>
    </div>
  );
}
