<template>
    <el-dialog v-model="centerDialogVisible" title="***Important note***" width="350" center>
    <span class="flex flex-col">
      <span class="font-bold">This is a prototype application. The bottom navigation bar is only used for easy page navigation purposes. For a better UI experience, please open the application in a mobile screen view.</span>
      <span class="underline">Steps to use the application:</span>
      <span>1 - Use the application as an actual user (By following the right flow)</span>
      <span>2 - Visit (jump) to other pages by using the bottom navigation bar to see in details the UI design</span>
    </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
  <div
    class="flex flex-col justify-end py-20 mx-auto w-full text-base bg-white max-w-[480px]"
  >
    <img
      src="/public/Pathpals.png"
      class="h-72 w-72 mx-auto"
    />
    <div class="flex flex-col justify-center px-4 mt-52 w-full">
      <button
      @click="navigateTo('LoginPage')"
        class="justify-center p-4 font-medium text-center text-white bg-emerald-400 shadow-sm rounded-[50px] hover:bg-emerald-500"
      >
        Sign in
    </button>
      <div class="self-center mt-5 text-gray-400">Don't have an account? <span class="text-emerald-400">Register now</span> </div>
    </div>
  </div>
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
            navigateTo,
            centerDialogVisible
        };
    }
}

</script>
