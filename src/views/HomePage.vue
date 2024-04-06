
<template>
    <div class="flex flex-col mx-auto w-full bg-white max-w-[480px]">
      <div class="flex flex-col px-4 py-0.5 mt-8 w-full">
        <div class="self-start text-2xl font-medium text-black">Find a ride</div>
        <div class="mt-8 text-lg font-semibold leading-6 text-zinc-800">
          Where are you going?
        </div>
        <input
          type="text"
          placeholder="From"
          class="justify-center items-start p-4 mt-5 text-base leading-6 whitespace-nowrap rounded-sm border border-solid bg-slate-50 border-zinc-100 text-neutral-400"
        />
        <input
          type="text"
          placeholder="To"
          class="justify-center items-start px-4 py-6 mt-5 text-base leading-6 whitespace-nowrap rounded-sm border border-solid bg-slate-50 border-zinc-100 text-neutral-400"
        />
        <div class="mt-7 text-lg font-semibold leading-6 text-zinc-800">
          When?
        </div>
        <input
          type="text"
          placeholder="Today, 5:30 PM"
          class="justify-center items-start p-4 mt-7 text-base leading-6 rounded-sm border border-solid bg-slate-50 border-zinc-100 text-neutral-400"
        />
        <div class="self-start mt-7 text-lg font-semibold leading-6 text-zinc-800">
          Seat needed?
        </div>
        <div class="flex gap-5 justify-between mt-7 max-w-full w-[123px]">
            <button class="shrink-0 rounded-full border border-black border-solid aspect-square stroke-[1px] w-[21px]">-</button>

          <div class="my-auto text-lg font-medium text-black">1</div>
          <button class="shrink-0 rounded-full border border-black border-solid aspect-square stroke-[1px] w-[21px]">+</button>
        </div>
      </div>
      <button
        class="justify-center self-center p-4 mt-24 text-base font-medium text-center text-white whitespace-nowrap bg-blue-400 shadow-sm rounded-[50px]"
      >
        Search
      </button>
    </div>
  </template>