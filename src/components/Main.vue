<template>
  <div class="relative m-0 p-0 ">
    <NavBar />
    <div class="flex items-center justify-center overflow-hidden">
      <Card />
    </div>
    <div class="absolute mt-[86px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1348"
        height="90.674"
        viewBox="0 0 1366 90.674"
      >
        <path
          id="Path_1"
          data-name="Path 1"
          d="M0,173,1366,82.326V173Z"
          transform="translate(0 -82.326)"
          fill="#0d2e4a"
        />
      </svg>
    </div>
    <Footer />
  </div>
  
</template>

<script>
import Card from "@/components/Login_Items/Card.vue";
import NavBar from "@/components/Login_Items/NavBar.vue";
import Footer from "@/components/Login_Items/Footer.vue";
export default {
  name: "Main",
  components: {
    Card,
    NavBar,
    Footer,
  },
};
</script>

<style></style>
