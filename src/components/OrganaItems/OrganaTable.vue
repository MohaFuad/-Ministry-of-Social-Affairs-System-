<template>
  <div class="shrink border rounded-xl drop-shadow-lg p-4 bg-white">
    <div class="bg-white text-black font-medium text-right p-4">
      <span class="">جميع المنظمات</span>
      <div class=""></div>
    </div>
    <table class="w-full text-sm text-left text-gray-400 dark:text-gray-400 table-auto ">
      <thead
        class="
          text-xs text-gray-700
          uppercase
          bg-gray-50
          dark:bg-gray-700 dark:text-gray-400
          border
          cotainer mx-auto
          
        "
      >
        <tr>
          <th scope="col" class="py-3 px-32 font-light">الأسم</th>
          <th scope="col" class="py-3 px-28 font-light">نشاط المؤسسة</th>
          <th scope="col" class="py-3 px-32 font-light">هاتف المؤسسة</th>
          <th scope="col" class="py-3 px-32 font-light">الحالة</th>
          <th scope="col" class="py-3 px-32 font-light">العمليات</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
          <th
            scope="row"
            class="
              py-4
              px-6
              font-medium
              text-gray-900
              whitespace-nowrap
              dark:text-white
            "
          >
            منظمة نورة التنموي
          </th>
          <td class="py-4 px-20">منظمة إنسانية تنموية</td>
          <td class="py-4 px-32">789654123</td>
          <td class="py-4 px-28 text-green-500">مرخصة</td>
          <td class="py-4 px-24"><i class="fas fa-ellipsis-v align-middle justify-center">…</i></td>
          
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="
              py-4
              px-6
              font-medium
              text-gray-900
              whitespace-nowrap
              dark:text-white
            "
          >
            مؤسسة شبوة للتنمية
          </th>
          <td class="py-4 px-28">خيري - تنموي</td>
          <td class="py-4 px-24">00967-5-266222</td>
          <td class="py-4 px-24 text-red-500">غير مرخصة</td>
          <td class="py-4 px-24"><i class="fas fa-ellipsis-v align-middle justify-center">…</i></td>          
        </tr>
        <tr class="bg-white dark:bg-gray-800">
          <th
            scope="row"
            class="
              py-4
              px-6
              font-medium
              text-gray-900
              whitespace-nowrap
              dark:text-white
            "
          >
           مؤسسة فورهيومن للتنمية
          </th>
          <td class="py-4 px-24">أجتماعي - تنموي</td>
          <td class="py-4 px-24">       </td>
          <td class="py-4 px-24 text-red-500">غير مرخصة</td>
          <td class="py-4 px-24"><i class="fas fa-ellipsis-v align-middle justify-center">…</i></td>          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>