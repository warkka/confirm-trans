import React from 'react';

export const ConfirmButton = () => {
  return (
    <button
      className="bg-[rgba(38,237,28,1)] self-center flex min-h-14 w-full max-w-[353px] items-center gap-2 text-xl text-[rgba(28,28,28,1)] font-semibold whitespace-nowrap justify-center mt-[66px] px-2.5 py-3.5 rounded-3xl"
      type="button"
    >
      <div className="self-stretch flex w-7 shrink-0 h-7 my-auto" />
      <span className="self-stretch my-auto">Confirm</span>
    </button>
  );
};