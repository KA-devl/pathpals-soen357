<template>
  <div class="fixed bottom-0 left-0 z-100 w-full h-16 bg-gray-700">
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
      <router-link
        :to="{ name: 'RateDriver' }"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#6b7280"
          stroke="##6b7280"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          ></polygon>
        </svg>
        <span
          class="text-xs text-gray-500 dark:text-gray-400"
          style="white-space: nowrap"
          >Rate Driver</span
        >
      </router-link>
      <router-link
        :to="{ name: 'RidePage' }"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6b7280"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span class="text-xs text-gray-500">Rides</span>
      </router-link>
      <router-link
        :to="{ name: 'HomePage' }"
        type="button"
        class="inline-flex flex-col items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6b7280"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <span class="text-xs text-gray-500" style="white-space: nowrap"
          >New ride</span
        >
      </router-link>

      <router-link
        :to="{ name: 'RideDetail' }"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6b7280"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span class="text-xs text-gray-500">Upcoming</span>
      </router-link>

      <router-link
        :to="{ name: 'RideDetail' }"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#6b7280"
          stroke="#6b7280"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
          ></path>
        </svg>
        <span class="text-xs text-gray-500">Messages</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  components: {},
  setup() {
    const isNavbarHidden = ref(true);
    const toggleNavbar = () => {
      isNavbarHidden.value = !isNavbarHidden.value;
    };

    return { isNavbarHidden, toggleNavbar };
  },
};
</script>
<style scoped>
/* .navbar-hide {
  transform: translateY(82%);
  transition: transform 0.3s ease;
} */

a.router-link-active span {
  color: #ffffff;
}

a.router-link-active svg {
  stroke: #ffffff;
}
</style>
