<template>
  <aside class=" w-1/6 fixed">
    <!-- Side Bar -->
    <div class="bg-white  h-screen">
      <br />
      <div class="absolute right-24">
        <Emblem />
      </div>
      <br />
      <nav class="pt-12 text-sm mr-6 flex flex-col text-gray-400">
        <router-link class="button hover:text-gray-600" to="/">
          <button class=" w-full p-4 ease-in duration-300">
            <div class="flex flex-row-reverse float-right">
              <span class="pr-3">لوحة التحكم</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5"
                viewBox="0 0 471.002 342.648"
              >
                <g id="monitor-svgrepo-com" transform="translate(0 -64.176)">
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M443.5,86.676H27.5a5,5,0,0,0-5,5V345.169a5,5,0,0,0,5,5h416a5,5,0,0,0,5-5V91.676a5,5,0,0,0-5-5Zm-5,253.493H32.5V96.676h406Z"
                    fill="#2312cb"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M449.055,64.176H21.946A21.971,21.971,0,0,0,0,86.121v264.6a21.97,21.97,0,0,0,21.946,21.945H170.289l-7.91,19.156H130.607a7.5,7.5,0,1,0,0,15H340.4a7.5,7.5,0,0,0,0-15H308.625l-7.911-19.156H449.057A21.97,21.97,0,0,0,471,350.723V86.121a21.973,21.973,0,0,0-21.947-21.945ZM292.394,391.825H178.606l7.911-19.156h97.967ZM456,350.724a6.952,6.952,0,0,1-6.945,6.945H21.946A6.954,6.954,0,0,1,15,350.724V86.121a6.954,6.954,0,0,1,6.946-6.946H449.055A6.953,6.953,0,0,1,456,86.121Z"
                    fill="#2312cb"
                  />
                </g>
              </svg>
            </div>
          </button>
        </router-link>
        <router-link class="button hover:text-gray-600" to="/Organization">
          <button class="w-full p-4">
            <div class="flex flex-row-reverse float-right">
              <span class="pr-3">المنظمات</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-6"
                viewBox="0 0 576 512"
              >
                <path
                  id="id_101"
                  d="M560,448H544V96H32V448H16.02a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V320a96,96,0,0,1,192,0l.02,160v16a16,16,0,0,0,16,16H560a16,16,0,0,0,16-16V464A16,16,0,0,0,560,448ZM560,0H16A16,16,0,0,0,0,16V48A16,16,0,0,0,16,64H560a16,16,0,0,0,16-16V16A16,16,0,0,0,560,0Z"
                  fill="#0a24c9"
                />
              </svg>
            </div></button
        ></router-link>
        <router-link class="button hover:text-gray-600" to="/AddOrgan">
          <button class="w-full p-4 ">
            <div class="flex flex-row-reverse float-right">
              <span class="pr-3">اضافة منظمة</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5"
                viewBox="0 0 134 131.057"
              >
                <path
                  id="add-svgrepo-com"
                  d="M119.111,0H14.889A14.772,14.772,0,0,0,0,14.562V116.5a14.772,14.772,0,0,0,14.889,14.562H119.111A14.772,14.772,0,0,0,134,116.5V14.562A14.772,14.772,0,0,0,119.111,0Zm0,72.81a7.364,7.364,0,0,1-7.444,7.281H81.889v29.124a7.364,7.364,0,0,1-7.444,7.281H59.556a7.364,7.364,0,0,1-7.444-7.281V80.091H22.333a7.364,7.364,0,0,1-7.444-7.281V58.248a7.364,7.364,0,0,1,7.444-7.281H52.111V21.843a7.364,7.364,0,0,1,7.444-7.281H74.444a7.364,7.364,0,0,1,7.444,7.281V50.967h29.778a7.364,7.364,0,0,1,7.444,7.281Z"
                  fill="#ff8316"
                />
              </svg>
            </div></button
        ></router-link>
        <!-- <router-link class="button hover:text-gray-600" to="/Registered">
          <button class="w-full p-4">
            <div class="flex flex-row-reverse float-right">
              <span class="pr-3">منظمات مسجلة</span>
              <svg
                id="checkbox-svgrepo-com"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5"
                viewBox="0 0 153.381 153.139"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M0,0H153.381V153.139H0Z"
                  fill="none"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M11.188,3h131a8.181,8.181,0,0,1,8.188,8.174v130.79a8.181,8.181,0,0,1-8.188,8.174h-131A8.181,8.181,0,0,1,3,141.965V11.174A8.181,8.181,0,0,1,11.188,3Zm8.188,16.349V133.79H134V19.349Zm49.151,89.918L33.786,74.583,45.364,63.025,68.527,86.15l46.31-46.243,11.586,11.559Z"
                  transform="translate(0 0)"
                  fill="#19f244"
                />
              </svg>
            </div></button
        ></router-link>

        <router-link class="button hover:text-gray-600" to="/NotRegistered"
          ><button class="w-full p-4">
            <div class="flex flex-row-reverse float-right">
              <span class="pr-3">منظمات غير مسجلة</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5"
                viewBox="0 0 223.157 119.227"
              >
                <path
                  id="backspace-svgrepo-com"
                  d="M0,62.613,78.1,3H223.157V122.227H78.1Zm160.785,0,23.766-18.054L168.707,32.466,145.052,50.691,121.4,32.551,105.553,44.644l23.878,17.969L105.665,80.668l15.844,12.093,23.543-18.225,23.655,18.139,15.844-12.093L160.673,62.613Z"
                  transform="translate(0 -3)"
                  fill="#d22459"
                />
              </svg>
            </div>
          </button>
        </router-link> -->

        <router-link class="button hover:text-gray-600" to="/Activity">
          <button class="w-full p-4">
            <div class="flex flex-row-reverse float-right">
              <span class="pr-3">تجديد مزاولة النشاط</span>

              <svg
                id="Group_1"
                data-name="Group 1"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5"
                viewBox="0 0 452.016 419.484"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M450.887,219.4a14.831,14.831,0,0,0-13.7-9.4H408.03C397.279,104.489,310.139,21.971,204.576,21.971,91.772,21.971,0,116.193,0,232.008c0,110.29,83.224,201,188.581,209.4a14.6,14.6,0,0,0,11.219-4,15.419,15.419,0,0,0,4.774-11.174V354.819a15.061,15.061,0,0,0-13.016-15.091c-52.174-6.6-92.7-52.395-92.7-107.72,0-59.849,47.425-108.539,105.717-108.539,50.95,0,93.6,37.2,103.531,86.53H282.256a14.829,14.829,0,0,0-13.7,9.4,15.525,15.525,0,0,0,3.215,16.592l77.466,79.533a14.555,14.555,0,0,0,20.97,0l77.466-79.533A15.524,15.524,0,0,0,450.887,219.4Z"
                  transform="translate(0 -21.971)"
                  fill="#ffd500"
                />
              </svg>
            </div></button
        ></router-link>

        <router-link class="button hover:text-gray-600" to="/Location">
          <button class="w-full p-4">
            <div class="flex flex-row-reverse float-right">
              <span class="pr-3">المواقع</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5"
                viewBox="0 0 110.417 156.426"
              >
                <path
                  id="location-svgrepo-com"
                  d="M58.208,156.426S3,85.018,3,54.749C3,24.512,27.718,0,58.208,0s55.208,24.512,55.208,54.749C113.417,85.018,58.208,156.426,58.208,156.426Zm0-86.034A15.643,15.643,0,1,0,42.435,54.749,15.709,15.709,0,0,0,58.208,70.392Z"
                  transform="translate(-3)"
                  fill="#11d3e9"
                />
              </svg>
            </div></button
        ></router-link>

        <router-link class="button hover:text-gray-600" to="/Users">
          <button class="w-full p-4">
            <div class="flex flex-row-reverse float-right">
              <span class="pr-3">المستخدمين</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5"
                viewBox="0 0 348.19 272.892"
              >
                <g id="users-svgrepo-com" transform="translate(-0.001 -4.477)">
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M112.739,68.666c0-35.442,27.46-64.189,61.348-64.189,33.908,0,61.348,28.747,61.348,64.189,0,35.462-27.44,64.189-61.348,64.189C140.2,132.856,112.739,104.139,112.739,68.666ZM347.92,189.494l-8.575-53.78a25.676,25.676,0,0,0-18.5-20.247,44.563,44.563,0,0,1-61.173,0,25.629,25.629,0,0,0-18.505,20.247l-.2,1.265a40.042,40.042,0,0,0-18.222-10.736,70.831,70.831,0,0,1-97.3,0,40.042,40.042,0,0,0-18.222,10.736l-.2-1.265a25.687,25.687,0,0,0-18.505-20.247,44.563,44.563,0,0,1-61.173,0,25.647,25.647,0,0,0-18.5,20.247L.275,189.494c-1.844,11.542,5.814,20.992,16.983,20.992h70.45l-5.346,33.5c-2.926,18.359,9.248,33.381,27.031,33.381h129.4c17.783,0,29.957-15.052,27.031-33.381l-5.346-33.5h70.45C342.106,210.465,349.753,201.036,347.92,189.494ZM290.249,119.64c21.3,0,38.571-18.063,38.571-40.351s-17.276-40.351-38.571-40.351S251.688,57.012,251.688,79.29,268.973,119.64,290.249,119.64Zm-232.332,0c21.295,0,38.561-18.063,38.561-40.351S79.2,38.939,57.917,38.939c-21.3,0-38.571,18.073-38.571,40.351S36.622,119.64,57.917,119.64Z"
                    transform="translate(0 0)"
                    fill="#e9a0e4"
                  />
                </g>
              </svg>
            </div></button
        ></router-link>
      </nav>
    </div>
  </aside>
</template>

<script>
import Emblem from "@/assets/Emblem.vue";
export default {
  components: {
    Emblem,
  },
};
</script>

<style></style>
