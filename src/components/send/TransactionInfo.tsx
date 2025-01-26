import React from 'react';

export const TransactionInfo = () => {
  return (
    <div className="flex w-full flex-col items-stretch font-medium mt-4 px-5">
      <h3 className="self-stretch flex-1 shrink w-full gap-2.5 text-xl text-[rgba(28,28,28,1)] whitespace-nowrap">
        Information
      </h3>
      <div className="self-center flex w-[353px] max-w-full flex-col items-stretch text-lg text-[rgba(143,143,143,1)] justify-center mt-2">
        <div className="flex w-full gap-[40px_100px] justify-between">
          <span>Total Value</span>
          <span>$100.00</span>
        </div>
        <div className="flex w-full gap-[40px_100px] whitespace-nowrap justify-between mt-[5px]">
          <span>Chain</span>
          <span>Base</span>
        </div>
        <div className="flex w-full gap-[40px_100px] justify-between mt-[5px]">
          <span>Network cost</span>
          <span>$0.01</span>
        </div>
        <div className="flex w-full gap-[40px_100px] justify-between mt-[5px]">
          <span>Transfer time</span>
          <span>3 sec</span>
        </div>
        <div className="flex w-full gap-[40px_100px] text-[rgba(28,28,28,1)] whitespace-nowrap justify-between mt-[5px]">
          <span>Total</span>
          <span>$100.01</span>
        </div>
      </div>
    </div>
  );
};