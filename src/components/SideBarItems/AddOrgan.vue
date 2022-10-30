<template>
  <div class="relative w-5/6 float-left bg-[#004455] pt-12 pb-24">
    <div class="container">
      <div class="border border-black w-9/10 h-[300px] rounded-md bg-white">
        <div class="mt-3 py-4">
          <span class="mr-12">إضافة نشاط جديد</span>
          <router-link
            class="
              button
              bg-[#5e72e4]
              float-left
              text-white
              p-2
              rounded-md
              text-sm
              ml-12
            "
            to="/"
            >القائمة</router-link
          >
        </div>
        <div class="bg-blue-100 px-6 mt-4 py-5">
          <span class="p-2">البيانات الأساسية للمؤسسة</span>
          <form
            class="
              flex flex-wrap
              text-xl
              border-b border-gray-600
              align-middle
              justify-center
              space-x-24
              py-5
              lg:space-x-12
              
            "
          >
            <label class="block space-x-24 ">
              <span class="block text-sm font-medium text-slate-700 py-2"
                >أسم المؤسسة باللغة العربية</span
              >
              <input
                id="NameAr"
                type="email"
                class="w-96 rounded-md shadow-lg p-3 lg:w-72"
                placeholder="أسم المؤسسة باللغة العربية"
              />
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-slate-700 py-2"
                >أسم المؤسسة باللغة الإنجليزية</span
              >
              <input
                id="NameEn"
                type="email"
                class="w-96 rounded-md shadow-lg p-3 lg:w-72"
                placeholder="أسم المؤسسة باللغة الأنجليزية"
              />
          
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-slate-700 py-2"
                >نوعها</span
              >
              <input
                id="Type"
                type="email"
                class="w-96 rounded-md shadow-xl p-3 box-shadow lg:w-72"
                placeholder="نوعها"
              />
              
            </label>
          </form>
          <form
            class="
              flex flex-wrap
              text-xl
              border-b border-gray-600
              align-middle
              justify-center
              space-x-24
              py-5
              lg:space-x-12
            "
          >
            <label class="block space-x-24">
              <span class="block text-sm font-medium text-slate-700 py-2"
                >تاريخ التأسيس</span
              >
              <input
                id="DateF"
                type="email"
                class="w-96 rounded-md shadow-lg p-3 lg:w-72"
                placeholder="سنة/شهر/يوم"
              />
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-slate-700 py-2">
                رقم تصريح مزاولة النشاط
              </span>

              <input
                id="ActiveNo"
                type="email"
                class="w-96 rounded-md shadow-lg p-3 lg:w-72"
                placeholder="رقم تصريح مزاولة النشاط"
              />
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-slate-700 py-2"
                >تاريخ إصداره</span
              >
              <input
                id="DateIssue"
                type="email"
                class="w-96 rounded-md shadow-xl p-3 box-shadow lg:w-72"
                placeholder="سنة/شهر/يوم"
              />
            </label>
          </form>
          <form
            class="
              flex flex-wrap
              text-xl
              border-b border-gray-600
              align-middle
              justify-center
              space-x-24
              py-5
              lg:space-x-12
            "
          >
            <label class="block space-x-24">
              <span class="block text-sm font-medium text-slate-700 py-2"
                >مجال عمل المؤسسة</span
              >
              <input
                id="Employment"
                type="email"
                class="w-96 rounded-md shadow-lg p-3 lg:w-72"
                placeholder="مجال عمل المؤسسة"
              />
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-slate-700 py-2"
                >البريد الإلكتروني</span
              >
              <input
                id="Email"
                type="email"
                class="w-96 rounded-md shadow-lg p-3 lg:w-72"
                placeholder="البريد الإلكتروني"
              />
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-slate-700 py-2"
                >الموقع الإلكتروني إن وجد</span
              >
              <input
                id="WebSite"
                type="email"
                class="w-96 rounded-md shadow-xl p-3 box-shadow lg:w-72"
                placeholder="الموقع الإلكتروني إن وجد"
              />
            </label>
          </form>
          <form
            class="
              flex flex-wrap
              text-xl
              border-b border-gray-600
              align-middle
              justify-center
              space-x-24
              py-5
              lg:space-x-12
            "
          >
            <label class="block space-x-24 ">
              <span class="block text-sm font-medium text-slate-700 py-2"
                >محلية ظ دولية</span
              >
              <LocalOrNo />
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-slate-700 py-2"
                >تاريخ تجديد الترخيص</span
              >
              <input
                id="DateRe"
                type="email"
                class="w-96 rounded-md shadow-lg p-3 lg:w-72"
                placeholder="سنة/شهر/يوم"
              />
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-slate-700 py-2"
                >هاتف المؤسسة</span
              >
              <input
                id="Phone"
                type="email"
                class="w-96 rounded-md shadow-xl p-3 box-shadow lg:w-72"
                placeholder="هاتف المؤسسة"
              />
            </label>
          </form>
          <div class="">
            <div class="">
              <input id="licensed" type="checkbox" value="" />
              <span class="p-3">مرخصة أو غير مرخصة</span>
            </div>
          </div>
          <br />
          <form class=" border border-black flex flex-col items-center">
            <span class="">شعار المؤسسة</span>
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class=" h-48 w-48"
                viewBox="0 0 306.068 247.233"
              >
                <path
                  id="image-svgrepo-com"
                  d="M306.568,26.976V229.257c0,18.88-3.9,22.476-22.955,22.476H23.455C4.548,251.733.5,248.287.5,229.257V26.976C.5,8.546,4.1,4.5,23.455,4.5H283.613C302.589,4.5,306.568,7.722,306.568,26.976ZM36.539,199.29H270.375c-25.557-36.486-71-97.32-82.554-97.32-11.179,0-49.124,49.154-66.271,66.453,0,0-22.045-28.851-33.6-28.851C76.183,139.572,36.922,198.99,36.539,199.29Zm68.7-127.362c0-15.283-12.618-27.638-28.227-27.638S48.79,56.644,48.79,71.927,61.407,99.565,77.017,99.565,105.244,87.211,105.244,71.927Z"
                  transform="translate(-0.5 -4.5)"
                  fill="#525f7f"
                />
              </svg>
            </div>
            <button type="button" v-on:click="GetData()" class="bg-green-400 border py-2 px-4 rounded-lg text-white">التالي</button>
            
          </form>
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
import LocalOrNo from "@/components/AddOrganaItems/LocalOrNo.vue";
export default {
  components: {
    LocalOrNo,
  },
  name: 'AddOrgan',
  data(){
    return {
      NameAr:null,
      NameEn:null,
      Type:null,
      DataF:null,
      ActiveNo:null,
      DataIssue:null,
      Employment:null,
      Email:null,
      WebSite:null,
      
    }

  },
  methods:{
    GetData(){
      console.alert("Done")
    }
  }
};
</script>

<style>
/* @media only screen and (max-width: 1200px) {
  input {
    width:300px;
    
  }
  span {
    color:blue;
  }
} */
</style>