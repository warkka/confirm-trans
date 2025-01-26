import React from 'react';

export const CurrencySelector = () => {
  return (
    <div className="w-full whitespace-nowrap mt-4 px-5">
      <label className="self-stretch flex-1 shrink w-full gap-2.5 text-xl text-[rgba(28,28,28,1)] font-medium">
        Currency
      </label>
      <div className="bg-white flex min-h-16 w-full items-center text-lg justify-between mt-2 px-2.5 py-2 rounded-[20px]">
        <div className="self-stretch flex min-w-60 items-center gap-4 flex-1 shrink basis-[0%] my-auto">
          <div className="self-stretch flex w-12 shrink-0 h-12 my-auto" />
          <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
            <div className="text-[rgba(28,28,28,1)] font-medium">USDT</div>
            <div className="text-[rgba(143,143,143,1)] font-normal">Tether</div>
          </div>
        </div>
        <div className="self-stretch flex w-7 shrink-0 h-7 my-auto" />
      </div>
    </div>
  );
};