<template>
  <div class="flex flex-col pb-5 mx-auto w-full bg-white max-w-[480px]">
    <div class="flex flex-col px-4 pt-1 pb-7 mt-8 w-full">
      <div class="self-start text-2xl font-medium text-black">Mon 12 July</div>
      <div class="flex gap-5 justify-between py-4 text-base">
        <div class="text-center leading-[150%] text-neutral-400">
          Total price for 1 passenger
        </div>
        <div class="font-semibold text-emerald-400">57.50$</div>
      </div>
      <div class="flex gap-2.5 items-start mt-4">
        <div class="flex flex-col text-sm text-zinc-800">
          <div>05:00 PM</div>
          <div class="mt-12">07:00 PM</div>
        </div>
        <div class="flex flex-col">
          <div
            class="z-10 shrink-0 w-3 h-3 bg-white rounded-full border border-emerald-400 border-solid"
          ></div>
          <div
            class="shrink-0 -mt-1 -mb-1 bg-emerald-400 border-2 border-emerald-400 border-solid h-[70px]"
          ></div>
          <div
            class="shrink-0 w-3 h-3 bg-white rounded-full border border-emerald-400 border-solid"
          ></div>
        </div>
        <div
          class="flex flex-col self-stretch text-xs font-medium text-zinc-800"
        >
          <div class="text-sm">Cote-de-Neige,Montreal</div>
          <div class="mt-1 text-neutral-400">Montreal</div>
          <div
            class="flex gap-3 mt-1 font-semibold text-center text-orange-300 leading-[150%]"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e34666bc787ff26086b98ea6ad0d522ee4db54c41c218b872dd3102529edc0ab?apiKey=129d1f5e93294c7ca9a080645a380eca&"
              class="shrink-0 aspect-square w-[22px]"
            />
            <div class="flex-auto my-auto">8.7 km from your departure</div>
          </div>
          <div class="mt-5 text-sm">Westboro,Ottawa</div>
          <div class="mt-1 text-neutral-400">Ottawa</div>
          <div
            class="flex gap-2 mt-1 font-semibold text-center text-orange-300 leading-[150%]"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e34666bc787ff26086b98ea6ad0d522ee4db54c41c218b872dd3102529edc0ab?apiKey=129d1f5e93294c7ca9a080645a380eca&"
              class="shrink-0 aspect-square w-[22px]"
            />
            <div class="flex-auto my-auto">6.3 km from your destination</div>
          </div>
        </div>
      </div>
      <div
        class="shrink-0 mt-3.5 h-px border border-solid bg-zinc-100 border-zinc-100"
      ></div>
      <div
        class="z-10 shrink-0 h-px border border-solid bg-zinc-100 border-zinc-100"
      ></div>
      <div class="flex gap-5 justify-between py-4 w-full">
        <div class="flex flex-col my-auto">
          <div class="text-sm font-medium text-zinc-800">Johnny</div>
          <div class="flex gap-1.5 justify-center text-xs text-neutral-400">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/65c95de435db5790f170a2fa2192529fa29e064476f0454926abc72b5153c9b6?apiKey=129d1f5e93294c7ca9a080645a380eca&"
              class="shrink-0 self-start w-3 aspect-square"
            />
            <div>4.5/5 - 13 ratings</div>
          </div>
        </div>
        <div class="flex gap-5">
          <img
            loading="lazy"
            src="https://img.freepik.com/free-photo/man-car-driving_23-2148889981.jpg"
            class="shrink-0 aspect-square w-[42px] rounded-full"
          />
        </div>
      </div>
      <div
        class="flex gap-5 justify-between mt-4 w-full text-sm font-medium text-emerald-400 "
      >
        <div class="flex gap-2.5 ">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12f3ec1dd515505de64342d51dfad4cecf989a5dc2e885d60704944f8577e2cf?apiKey=129d1f5e93294c7ca9a080645a380eca&"
            class="shrink-0 self-start aspect-[1.49] w-[30px]"
          />
          <div @click="navigateTo('RideChat')" class="cursor-pointer hover:text-emerald-500">Contact Johnny</div>
        </div>

      </div>
      <div
        class="shrink-0 mt-3.5 h-px border border-solid bg-zinc-100 border-zinc-100"
      ></div>
      <div
        class="flex gap-2.5 justify-center mt-4 text-base leading-6 text-center text-neutral-400"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/45077610a6d7345c1e43fa44e621a7340c0a2595fa9bba177cc838ccda6f87dc?apiKey=129d1f5e93294c7ca9a080645a380eca&"
          class="shrink-0 my-auto aspect-[1.49] w-[30px]"
        />
        <div>Max, 2 in the back seats</div>
      </div>
      <div class="mt-9 text-base font-bold leading-6 text-center text-zinc-800">
        Honda Accord 2021
      </div>
    </div>
    <el-dialog v-model="centerDialogVisible" title="Are you sure you would like to rate your driver?" width="350" center>
    <span>
      You must finish your ride in order to rate the driver. Are you sure you want to rate the driver?
    </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false; navigateTo('RateDriver'); ">
          Rate the driver
        </el-button>
      </div>
    </template>
  </el-dialog>

    <button
    @click="centerDialogVisible = true"
      class="hover:bg-emerald-500 justify-center self-center p-4  text-base font-medium leading-6 text-center text-white bg-emerald-400 shadow-sm rounded-[50px]"
    >
      Rate Driver
  </button>
    <button
    @click="navigateTo('RideChat')"
      class="hover:bg-emerald-500 justify-center self-center p-4 mt-3 text-base font-medium leading-6 text-center text-white bg-emerald-400 shadow-sm rounded-[50px]"
    >
      Send message
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
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
    setup() {
      const centerDialogVisible = ref(false)
        const router = useRouter();
        const navigateTo = (route) => {
            router.push({ name: route });
        };
        return {
            navigateTo,
            centerDialogVisible
        };
    }
}

</script>

