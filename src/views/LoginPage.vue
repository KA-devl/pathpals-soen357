<template>
  <div
    class="flex flex-col justify-end pt-20 pb-5 mx-auto w-full text-base bg-white max-w-[480px]"
  >
    <form
      class="flex flex-col px-4 py-0.5 mt-16 w-full leading-[150%] text-neutral-400"
    >
      <div class="text-2xl font-medium text-zinc-800">
        Your email and password
      </div>
      <input
        class="justify-center items-start p-4 mt-5 whitespace-nowrap rounded-sm border border-solid bg-slate-50 border-zinc-100"
        placeholder="Email"
      >
        
    
      <div
        class="flex gap-5 justify-between p-4 mt-5 whitespace-nowrap rounded-sm border border-solid bg-slate-50 border-zinc-100"
      >
        <div class="my-auto">Password</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a201f2ae420a0ec54472b1b93c20c6da1444bc16fd43e7287c528bb24c5658c?"
          class="shrink-0 w-6 aspect-square"
        />
      </div>
      <div class="mt-5 text-center text-sky-600">
        <span class="text-sky-600">Forgot</span>
        <span class="">Password?</span>
      </div>
    </form>
    <div
      class="justify-center self-center p-4 mt-3 font-medium text-center text-white bg-emerald-400 shadow-sm rounded-[50px]"
      @click="navigateTo('HomePage')"
    >
      Sign in
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