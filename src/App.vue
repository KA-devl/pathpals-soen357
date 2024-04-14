<template>
    <router-view />
    <BottomNavbar />
    
</template>

<script>
import BottomNavbar from './components/BottomNavbar.vue';

export default {
    components: {
        BottomNavbar,
    },

};


</script>
