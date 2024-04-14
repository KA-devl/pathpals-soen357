<template>
  <div
    class="flex flex-col justify-end py-20 mx-auto w-full text-base bg-white max-w-[480px]"
  >
    <img
      src="/public/Pathpals.png"
      class="h-72 w-72 mx-auto"
    />
    <div class="flex flex-col justify-center px-4 mt-52 w-full">
      <div
      @click="navigateTo('LoginPage')"
        class="justify-center p-4 font-medium text-center text-white bg-emerald-400 shadow-sm rounded-[50px]"
      >
        Sign Up
      </div>
      <div class="self-center mt-5 text-gray300">Sign up</div>
    </div>
  </div>
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
