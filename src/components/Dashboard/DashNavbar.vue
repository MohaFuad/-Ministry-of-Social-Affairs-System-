<template>
  <div class="bg-[#004455] w-5/6 float-left pb-8">
    <div class="">
      <button @click="UserOpen = !UserOpen" class="pt-5 float-left flex ml-12">
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-9"
            viewBox="0 0 489 489"
          >
            <g
              id="Ellipse_1"
              data-name="Ellipse 1"
              fill="#83adbc"
              stroke="#707070"
              stroke-width="1"
            >
              <circle cx="244.5" cy="244.5" r="244.5" stroke="none" />
              <circle cx="244.5" cy="244.5" r="244" fill="none" />
            </g>
            <g id="user-svgrepo-com">
              <g id="Group_1" data-name="Group 1">
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M417.4,71.6A244.518,244.518,0,0,0,71.6,417.4,244.518,244.518,0,0,0,417.4,71.6ZM244.5,462C124.6,462,27,364.4,27,244.5S124.6,27,244.5,27,462,124.6,462,244.5,364.4,462,244.5,462Z"
                  fill="#161515"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M244.5,203.2a63.65,63.65,0,1,0-63.6-63.7A63.7,63.7,0,0,0,244.5,203.2Zm0-100.3a36.6,36.6,0,1,1-36.6,36.6A36.617,36.617,0,0,1,244.5,102.9Z"
                  fill="#161515"
                />
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M340.9,280.5c-22.3-32.8-54.7-49.5-96.4-49.5s-74.1,16.6-96.4,49.5c-16.6,24.4-27.2,57.7-31.4,98.7a13.473,13.473,0,0,0,26.8,2.8c8.5-82.3,42.5-124,101-124s92.5,41.7,101,124a13.525,13.525,0,0,0,13.4,12.1,6.6,6.6,0,0,0,1.4-.1,13.47,13.47,0,0,0,12-14.8C368.1,338.1,357.5,304.9,340.9,280.5Z"
                  fill="#161515"
                />
              </g>
            </g>
          </svg>
        </div>
        <span class="text-white text-[13px] pr-2 mt-2">ِAdmin</span>
      </button>

      <!-- Dropdown menu -->
      <div v-if="UserOpen" class="absolute bg-white rounded-lg left-24 top-2 mt-12 mr-24 w-44">
        <ul class="align-items-center">
          <li class="max-w-fit">
            <a class="" href="#" role="button"> </a>
            <div class="flex flex-col flo">
              <div class="ml-16">
                <span class="text-[12px] mt-2 mr-3">مرحبا!</span>
              </div>
              <a
                class="py-4 px-4 border-b hover:bg-teal-50 overflow-hidden"
                href="/"
              >
                <span class="">الملف الشخصي</span>
              </a>
              <a class="p-3 hover:bg-teal-50 py-5 px-4" href="">
                <span class="">تسجيل الخروج</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="absolute text-white right-1/4 top-5 ">
      <a href="/">
        <span class="">لوحة التحكم</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      UserOpen: false,
    };
  },
};
</script>

<style></style>
