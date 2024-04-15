<template>
     
    <div class="flex flex-col p-4 max-w-[375px]  mx-auto">
      <div class="mt-8 text-lg font-semibold leading-6 text-zinc-800 p-5">
        Results for "Montreal to Ottawa"
      </div>
      <div
        class="flex flex-col justify-between p-5 w-full bg-white rounded shadow-sm"
      >
        <div class="flex gap-2.5 justify-between">
          <div class="flex gap-2.5 items-start">
            <div
              class="flex flex-col justify-center self-stretch py-1 text-sm font-medium text-zinc-800"
            >
              <div>05:00 PM</div>
              <div class="mt-9">07:00 PM</div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/da83800fdb1e98c7a9f01c7ea04c197e23f9c41d29d12026e24e5ad5a7b47f81?"
              class="shrink-0 w-2.5 aspect-[0.18]"
            />
            <div class="flex flex-col">
              <div class="text-sm font-medium leading-4 text-zinc-800">
                Montreal
              </div>
              <div class="flex gap-1 pr-20 mt-1">
               <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/178853887cf5f91f55c97ae50a49eb547ebd171d0e3a37b180a7dbdc6e7638ab?"
                  class="shrink-0 w-3 aspect-square"
                />
              </div>
              <div class="mt-2 text-sm font-medium leading-4 text-zinc-800">
               Ottawa
              </div>
            </div>
          </div>
          <div class="self-start text-sm font-semibold text-emerald-400">
            57,50$
          </div>
        </div>
        <div @click="navigateTo('RideDetail')" class="flex gap-4 mt-5 ">
          <img
            loading="lazy"
            src="https://img.freepik.com/free-photo/man-car-driving_23-2148889981.jpg"
            class="shrink-0 self-start aspect-square w-[42px] rounded-full"
          />
          <div class="flex flex-col">
            <div class="text-sm font-medium text-black">Johnny</div>
            <div class="text-xs text-neutral-400">Pickup at station MCGILL</div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col justify-between p-5 mt-4 w-full bg-white rounded shadow-sm"
      >
        <div class="flex gap-1.5 justify-between">
          <div class="flex gap-2.5 items-start">
            <div
              class="flex flex-col justify-center self-stretch py-1 text-sm font-medium text-zinc-800"
            >
              <div>03:15 PM</div>
              <div class="mt-9">05:30 PM</div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/da83800fdb1e98c7a9f01c7ea04c197e23f9c41d29d12026e24e5ad5a7b47f81?"
              class="shrink-0 w-2.5 aspect-[0.18]"
            />
            <div class="flex flex-col">
              <div class="text-sm font-medium leading-4 text-zinc-800">
                Montreal
              </div>
              <div class="flex gap-1 pr-20 mt-1">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/178853887cf5f91f55c97ae50a49eb547ebd171d0e3a37b180a7dbdc6e7638ab?"
                  class="shrink-0 w-3 aspect-square"
                /><img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/178853887cf5f91f55c97ae50a49eb547ebd171d0e3a37b180a7dbdc6e7638ab?"
                  class="shrink-0 w-3 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/178853887cf5f91f55c97ae50a49eb547ebd171d0e3a37b180a7dbdc6e7638ab?"
                  class="shrink-0 w-3 aspect-square"
                />
              </div>
              <div class="mt-2 text-sm font-medium leading-4 text-zinc-800">
                Ottawa
              </div>
            </div>
          </div>
          <div class="self-start text-sm font-semibold text-emerald-400">
            49,75$
          </div>
        </div>
        <div class="flex gap-4 mt-5">
          <img
            loading="lazy"
            src="https://media.licdn.com/dms/image/D5603AQECzfpFLSVplA/profile-displayphoto-shrink_200_200/0/1696535449414?e=2147483647&v=beta&t=hPK_EVZLXtC15QljouSdSf6O0j115ZhVmGYPf0IcFyk"
            class="shrink-0 self-start aspect-square w-[42px] rounded-full"
          />
          <div class="flex flex-col">
            <div class="text-sm font-medium text-black">AbdelKader</div>
            <div class="text-xs text-neutral-400">Pickup at Jean-talon EST</div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col justify-between p-5 mt-4 w-full bg-white rounded shadow-sm"
      >
        <div class="flex gap-5 justify-between">
          <div class="flex gap-2.5 items-start">
            <div
              class="flex flex-col justify-center self-stretch py-1 text-sm font-medium text-zinc-800"
            >
              <div>09:00 PM</div>
              <div class="mt-9">11:00 PM</div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/da83800fdb1e98c7a9f01c7ea04c197e23f9c41d29d12026e24e5ad5a7b47f81?"
              class="shrink-0 w-2.5 aspect-[0.18]"
            />
            <div class="flex flex-col">
              <div class="text-sm font-medium leading-4 text-zinc-800">
                Montreal
              </div>
              <div class="flex gap-1 pr-20 mt-1">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/178853887cf5f91f55c97ae50a49eb547ebd171d0e3a37b180a7dbdc6e7638ab?"
                  class="shrink-0 w-3 aspect-square"
                /><img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/178853887cf5f91f55c97ae50a49eb547ebd171d0e3a37b180a7dbdc6e7638ab?"
                  class="shrink-0 w-3 aspect-square"
                /><img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/178853887cf5f91f55c97ae50a49eb547ebd171d0e3a37b180a7dbdc6e7638ab?"
                  class="shrink-0 w-3 aspect-square"
                /><img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/178853887cf5f91f55c97ae50a49eb547ebd171d0e3a37b180a7dbdc6e7638ab?"
                  class="shrink-0 w-3 aspect-square"
                />
              </div>
              <div class="mt-2 text-sm font-medium leading-4 text-zinc-800">
                 Ottawa
              </div>
            </div>
          </div>
          <div class="self-start text-sm font-semibold text-emerald-400">
            38,50$
          </div>
        </div>
        <div class="flex gap-4 mt-5">
          <img
            loading="lazy"
            src="https://www.immigration.ca/wp-content/uploads/2023/05/Truck-Driver_334503102-scaled.jpeg"
            class="shrink-0 self-start aspect-square w-[42px] rounded-full"
          />
          <div class="flex flex-col">
            <div class="text-sm font-medium text-black">Rodrigo</div>
            <div class="text-xs text-neutral-400">Pickup anywhere in Laval</div>
          </div>
        </div>
      </div>
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

export default {
    setup() {
        const router = useRouter();
        const navigateTo = (route) => {
            router.push({ name: route });
        };
        return {
            navigateTo
        };
    }
}

</script>