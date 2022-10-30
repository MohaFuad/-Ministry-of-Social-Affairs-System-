<template>
  <div class="relative w-5/6 float-left bg-[#004455] pt-12 pb-24">
    <!-- <router-link class="button" to="/">تجديد مزاولةالنشاط</router-link>
    <router-view /> -->
    <div class="container">
      <div
        class="absolute shadow-lg w-5/6 h-[300px] rounded-md bg-white mr-16 flex flex-col items-center"
      >
        <span class="mt-8 ">تجديد رخصة منظمة</span>
        <label class="block border-b  pb-7 pt-12 ">
          <span class="block text-sm font-medium text-slate-700 "
            >أختر المنظمة</span
          >
          <ChooseOrgana />
        </label>
        <button
            class="
              button
              bg-[#5e72e4]
              float-left
              text-white
              p-4
              rounded-md
              text-sm
              mt-5
            "
            to="/"
            >تجديد</button
          >
      </div>
    </div>
  </div>
</template>

<script>
import ChooseOrgana from '@/components/ActivityItem/ChooseOrgana.vue';
export default {
  components: {
    ChooseOrgana,
  }
};
</script>

<style></style>
