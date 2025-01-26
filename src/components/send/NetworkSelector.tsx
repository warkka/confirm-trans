import React from 'react';

export const NetworkSelector = () => {
  return (
    <div className="w-full text-[rgba(28,28,28,1)] font-medium whitespace-nowrap mt-4 px-5">
      <label className="self-stretch flex-1 shrink w-full gap-2.5 text-xl">
        Network
      </label>
      <div className="bg-white flex min-h-16 w-full items-center text-lg justify-between mt-2 px-2.5 py-2 rounded-[20px]">
        <div className="self-stretch flex min-w-60 items-center gap-4 flex-1 shrink basis-[0%] my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/b5b214468be0436aa9704971aeb73e67/cab3379b214cc5eddf07db16585b77ee82c6895246aacc7173888bd4fffd49cd?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto"
            alt="Network icon"
          />
          <div className="self-stretch min-w-60 flex-1 shrink my-auto">
            Base
          </div>
        </div>
        <div className="self-stretch flex w-7 shrink-0 h-7 my-auto" />
      </div>
    </div>
  );
};