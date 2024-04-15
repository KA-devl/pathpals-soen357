<template>
  <div
    class="flex flex-col justify-end pt-20 pb-5 mx-auto w-full bg-white max-w-[480px]"
  >
    <div class="flex flex-col px-4 py-0.5 mt-14 w-full">
      <div class="text-2xl font-medium text-black">
        Ahmad, Thanks for using<br />PathPals
      </div>
      <div class="mt-6 text-sm text-black">
        We hope you enjoyed your ride this morning :)
      </div>
      <div class="flex gap-5 justify-between mt-6">
        <div
          class="justify-center self-start py-2 text-lg font-semibold text-black"
        >
          Total distance & cost
        </div>
        <div class="flex flex-col py-1 text-right">
          <div class="text-2xl font-semibold leading-6 text-black">
            57,85$ CAD
          </div>
          <div class="self-end mt-2.5 text-sm text-neutral-400">125KM</div>
        </div>
      </div>
      <div class="flex gap-3.5 mt-5">
        <div class="flex flex-col self-start">
          <div
            class="z-10 shrink-0 w-4 h-4 bg-white rounded-full border-2 border-emerald-400 border-solid"
          ></div>
          <div
            class="shrink-0 -mt-2 -mb-2 h-16 bg-emerald-400 border-2 border-emerald-400 border-solid"
          ></div>
          <div
            class="shrink-0 w-4 h-4 bg-white rounded-full border-2 border-emerald-400 border-solid"
          ></div>
        </div>
        <div
          class="flex flex-col grow shrink-0 text-sm basis-0 text-zinc-800 w-fit"
        >
          <div>Montreal</div>
          <div class="mt-1 text-xs text-neutral-400">Downtown</div>
          <div class="mt-9">Quebec city</div>
          <div class="mt-1 text-xs text-neutral-400">Plateau du mont-royal</div>
        </div>
      </div>
      <div
        class="shrink-0 mt-5 h-px border border-solid bg-zinc-100 border-zinc-100"
      ></div>
      <div class="flex gap-5 mt-5">
        <img
          loading="lazy"
          src="https://img.freepik.com/free-photo/man-car-driving_23-2148889981.jpg"
          class="shrink-0 aspect-square w-[47px] rounded-full"
        />
        <div class="flex flex-col py-1 my-auto">
          <div class="text-sm text-black">Johnny</div>
          <div class="mt-2.5 text-xs text-neutral-400">
            H1S 2B5 Montreal, QC
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/16ce390e9f05da06c66fcb3870ec69ce53a8bc6fb4be4cd8ad0b0d396e122520?"
        class="self-center mt-5 ml-0 aspect-[10] max-w-[268px] w-[268px]"
      />
    </div>
    <button
      v-if="!hideButton"
      @click="open1"
      class="justify-center self-center p-4 mt-4 text-base font-medium leading-6 text-center text-white bg-emerald-400 shadow-sm rounded-[50px] hover:bg-emerald-500"
    >
      Rate Driver
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

<script setup>
import { ElNotification } from 'element-plus'
import {ref} from 'vue';

const hideButton = ref(false);

const open1 = () => {
  hideButton.value = true
  ElNotification({
    title: 'Success',
    message: 'Successfully rated the driver!',
    type: 'success',
  })
}



</script>