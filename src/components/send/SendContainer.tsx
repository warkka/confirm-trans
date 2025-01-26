import React from 'react';
import { CurrencySelector } from './CurrencySelector';
import { NetworkSelector } from './NetworkSelector';
import { TransactionInfo } from './TransactionInfo';
import { ConfirmButton } from './ConfirmButton';

export const SendContainer = () => {
  return (
    <div className="bg-[rgba(245,245,247,1)] flex max-w-[393px] flex-col overflow-hidden items-stretch pt-5 pb-9 rounded-[24px_24px_0px_0px]">
      <div className="flex w-full flex-col items-stretch">
        <header className="self-center flex w-[353px] max-w-full items-center text-xl text-[rgba(28,28,28,1)] font-semibold whitespace-nowrap relative">
          <div className="absolute left-0 flex w-8 shrink-0 h-8 my-auto" aria-label="Close" role="button" />
          <h1 className="w-full text-center">Send</h1>
        </header>

        <section className="self-center min-h-[52px] w-[353px] max-w-full mt-4">
          <h2 className="text-[rgba(28,28,28,1)] text-xl font-semibold">
            Confirm transactions to
          </h2>
          <p className="text-[rgba(143,143,143,1)] text-lg font-normal">
            0x9a23...a37a
          </p>
        </section>

        <div className="bg-white flex w-full items-center text-4xl font-medium whitespace-nowrap justify-between mt-4 p-5 rounded-[36px]">
          <div className="text-[rgba(28,28,28,1)] self-stretch flex-1 shrink basis-[0%] my-auto">
            $100.00
          </div>
          <div className="text-[rgba(143,143,143,1)] self-stretch my-auto">
            USD
          </div>
        </div>

        <CurrencySelector />
        <NetworkSelector />
        <TransactionInfo />
        <ConfirmButton />
      </div>
    </div>
  );
};