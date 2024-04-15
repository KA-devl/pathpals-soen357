<template>
  
  <div  class="flex flex-col mx-auto w-full bg-white max-w-[480px]">
    <div v-if="isAnimationOn" class="pt-20">
      <CarAnimation />
      <p class="p-3 font-bold text-xl">Searching the best options for you...</p>
    </div>
    <div v-if="!isAnimationOn" class="flex flex-col px-4 py-0.5 mt-8 w-full">
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
      <div
        class="self-start mt-7 text-lg font-semibold leading-6 text-zinc-800"
      >
        Seat needed?
      </div>
      <div class="flex gap-5 justify-between mt-7 max-w-full w-[123px]">
        <button
        @click="counter--"
          class="p-1 px-3 rounded-full bg-emerald-400 text-white border  border-solid aspect-square  font-bold text-2xl hover:bg-emerald-500"
        >
          -
        </button>

        <div class="my-auto text-lg font-medium text-black">{{ counter }}</div>
        <button
        @click="counter++"
          class="p-1 px-3 rounded-full bg-emerald-400 text-white border  border-solid aspect-square  font-bold text-2xl hover:bg-emerald-500"
        >
          +
        </button>
      </div>
    </div>
    <button
    v-if="!isAnimationOn"
    @click="isAnimationOn = true; navigateTo('RidePage')"
      class="justify-center self-center p-4 mt-24 text-base font-medium text-center text-white whitespace-nowrap bg-emerald-400 shadow-sm rounded-[50px] hover:bg-emerald-500"
    >
      Search for ride
    </button>



  </div>



  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</template>

<script>
import {ref} from 'vue';
import CarAnimation from '../components/CarAnimation.vue';
import {useRouter} from 'vue-router';

export default {
  components: {
    CarAnimation
  },
  setup() {
    const router = useRouter();
    const isAnimationOn = ref(false);
    const counter = ref(1);

    const navigateTo = (route) => {
      //push to page after 7 seconds
      setTimeout(() => {
        router.push({name: route});
      }, 7000);
    };
    return {
      counter,
      isAnimationOn,
      navigateTo
    }
  }
}




</script>



