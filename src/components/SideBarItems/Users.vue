<template>
  <div class="text-white text-center bg-[#004455] w-5/6 float-left py-16">
    <div class="">
      <router-link class="flex" to="/AddOrgan">
        <button class="bg-white w-[250px] h-[82px] rounded-md">
          <div class="">
            <span class="text-gray-400 text-sm float-right mt-3 mr-5"
              >إضافة منظمة</span
            >
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-12 float-left ml-5"
                viewBox="0 0 272 258"
              >
                <g
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  fill="#f13b3b"
                  stroke="#707070"
                  stroke-width="1"
                >
                  <ellipse cx="136" cy="129" rx="136" ry="129" stroke="none" />
                  <ellipse
                    cx="136"
                    cy="129"
                    rx="135.5"
                    ry="128.5"
                    fill="none"
                  />
                </g>
                <g
                  id="Ellipse_2"
                  data-name="Ellipse 2"
                  transform="translate(56 54)"
                  fill="#fff"
                  stroke="#707070"
                  stroke-width="1"
                >
                  <ellipse cx="80" cy="75.5" rx="80" ry="75.5" stroke="none" />
                  <ellipse cx="80" cy="75.5" rx="79.5" ry="75" fill="none" />
                </g>
                <path
                  id="add-svgrepo-com_1_"
                  data-name="add-svgrepo-com(1)"
                  d="M82.257,37.333H57.71v-25.8A11.4,11.4,0,0,0,46.612,0a11.4,11.4,0,0,0-11.1,11.529v25.8H10.967C4.936,37.333,0,42.658,0,49S4.936,60.667,10.967,60.667H35.514v25.8A11.4,11.4,0,0,0,46.612,98a11.4,11.4,0,0,0,11.1-11.529v-25.8H82.257c6.031,0,10.967-5.325,10.967-11.667S88.287,37.333,82.257,37.333Z"
                  transform="translate(89.388 80.5)"
                  fill="#f13b3b"
                />
              </svg>
            </div>
          </div>
        </button>
      </router-link>
    </div>
    <UserTable />
  </div>
</template>
<script>
import UserTable from "@/components/UserTable/UserTable.vue";
export default {
  conponents: {
    UserTable,
  },
};
</script>

<style>
</style>