<template>
  <div class="relative text-white text-center bg-[#004455] pt-12 pb-24 w-5/6 float-left">
    <div class="flex flex-row">
      <router-link class="px-12" to="/AddOrgan">
        <button class="bg-white w-[350px] h-[82px] rounded-sm">
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
      <router-link class="" to="/Activity">
        <button class="bg-white w-[350px] h-[82px] rounded-sm">
          <div class="">
            <span class="text-gray-400 text-sm float-right mr-5 mt-3"
              >تجديد مزاولة النشاط</span
            >
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-12 float-left ml-3"
                viewBox="0 0 305 270"
              >
                <g
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  fill="#fc0"
                  stroke="#707070"
                  stroke-width="1"
                >
                  <ellipse
                    cx="152.5"
                    cy="135"
                    rx="152.5"
                    ry="135"
                    stroke="none"
                  />
                  <ellipse
                    cx="152.5"
                    cy="135"
                    rx="152"
                    ry="134.5"
                    fill="none"
                  />
                </g>
                <g
                  id="refresh-svgrepo-com"
                  transform="translate(14.44 57.36) rotate(-18)"
                >
                  <g
                    id="Group_1"
                    data-name="Group 1"
                    transform="translate(0 21.971)"
                  >
                    <path
                      id="Path_1"
                      data-name="Path 1"
                      d="M214.086,110.952a7.045,7.045,0,0,0-6.5-4.236H193.737c-5.1-47.553-46.48-84.745-96.6-84.745C43.574,21.971,0,64.437,0,116.636c0,49.708,39.516,90.591,89.54,94.378a7.158,7.158,0,0,0,5.327-1.8,6.785,6.785,0,0,0,2.267-5.036V171.987a6.913,6.913,0,0,0-6.18-6.8c-24.773-2.977-44.015-23.614-44.015-48.55,0-26.974,22.518-48.919,50.2-48.919,24.192,0,44.44,16.765,49.158,39H134.018a7.045,7.045,0,0,0-6.5,4.236,6.736,6.736,0,0,0,1.526,7.478l36.782,35.846a7.17,7.17,0,0,0,9.957,0L212.56,118.43A6.736,6.736,0,0,0,214.086,110.952Z"
                      transform="translate(0 -21.971)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </button>
      </router-link>
    </div>

    <div class="text-gray-400 p-5 mt-12">
      <div class="block border-white w-9/10 h-[300px] rounded-md bg-white">
        <span class="float-right mt-3 mr-5"> فرز بحسب :</span>
        <br />
        <br />
        <div class="">
          <div class="flex flex-row p-4">
            <div class="block space-x-6">
              <span class="float-right pb-3">أختر حقول الإظهار</span>
              <Display />
            </div>
            <div class="space-x-6">
              <span class="float-right pb-3">نوع المنظمة</span>
              <Type />
            </div>
            <div class="space-x-6">
              <span class="float-right pb-3">المحافظة</span>

              <City />
            </div>
          </div>
          <br />
          <div class="flex flex-row p-4">
            <div class="space-x-6">
              <span class="float-right pb-3">مسجلة/غير مسجلة</span>
              <RegisterOrNo />
            </div>
            <div class="">
              <span class="float-right pb-3">مجددة/غير مجددة</span>
              <RefreshOrNo />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute mr-4 w-auto   h-[500px] align-middle justify-center">
      <OrganaTable />
    </div>
    <router-view />
  </div>
</template>

<script>
import City from "@/components/OrganaItems/City.vue";
import Display from "@/components/OrganaItems/Display.vue";
import RefreshOrNo from "@/components/OrganaItems/RefreshOrNo.vue";
import RegisterOrNo from "@/components/OrganaItems/RegisterOrNo.vue";
import Type from "@/components/OrganaItems/Type.vue";
import OrganaTable from '@/components/OrganaItems/OrganaTable.vue';
export default {
  components: {
    City,
    Display,
    RefreshOrNo,
    RegisterOrNo,
    Type,
    OrganaTable,
  },
};
</script>

<style></style>
