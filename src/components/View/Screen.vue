<template>
  <div class="">
    <DashNavbar />
    <SideBar />
    
  </div>
</template>

<script>
import DashNavbar from "@/components/Dashboard/DashNavbar.vue";
import SideBar from "@/components/Dashboard/SideBar.vue";
export default {
  name: "screen",
  components: {
    DashNavbar,
    SideBar,
  },
};
</script>

<style>
</style>