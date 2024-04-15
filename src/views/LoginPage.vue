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
        class="text-gray-700 justify-center items-start p-4 mt-5 whitespace-nowrap rounded-sm border border-solid bg-slate-50 border-emerald-100"
        placeholder="Email"
      >
        
      <input
        class="text-gray-700 justify-center items-start p-4 mt-5 whitespace-nowrap rounded-sm border border-solid bg-slate-50 border-emerald-100"
        placeholder="Password"
      >
      <div class="mt-5 text-center text-sky-600">
        <span class="text-gray-400">Forgot Password? </span>
      </div>
    </form>
    <button
      class="justify-center self-center p-4 px-16 mt-3 font-medium text-center text-white bg-emerald-400 shadow-sm rounded-[50px] hover:bg-emerald-500"
      @click="navigateTo('HomePage')"
    >
      Sign in
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
import { onMounted, ref } from 'vue';
export default {
    setup() {
      const centerDialogVisible = ref(false)
        const router = useRouter();
        const navigateTo = (route) => {
            router.push({ name: route });
        };
        onMounted(() => {
           centerDialogVisible.value = true;
        });
        return {
            navigateTo, centerDialogVisible
        };
    }
}

</script>