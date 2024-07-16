import React from 'react';
import Header from './Header';

type WrapperProps = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div>
      <Header />
      <main className="bg-very-light-gray pt-[80px]">
        <div className="max-w-[1440px] mx-auto my-0 px-[40px] box-border">
          {children}
        </div>
      </main>
    </div>
  );
}
