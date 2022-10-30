<template>
  <div class="shrink border rounded-xl drop-shadow-lg p-6 bg-white w-11/12 ">
    <div class="bg-white text-black font-medium text-right p-4">
      <span class="">المحافظات</span>
      <div class=""></div>
    </div>
    <table class=" text-sm text-left text-gray-400 dark:text-gray-400 table-auto w-full border ">
      <thead
        class="
          text-xs text-gray-700
          uppercase
          bg-gray-50
          dark:bg-gray-700 dark:text-gray-400
          border
          
          
        "
      >
        <tr>
          <th scope="col" class="py-3 float-right pr-3  font-light">#</th>
          <th scope="col" class="py-3 px-32  font-light">الأسم</th>
          <th scope="col" class="py-3 px-32  font-light">المحافظة</th> 
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
          <th
            scope="row"
            class="
              py-4
              
              font-medium
              text-gray-900
              whitespace-nowrap
              dark:text-white
              float-right pr-3
            "
          >
           1
          </th>
          <td class="py-4 px-32">شبوة</td>
          <td class="py-4 px-24 "><i class="fas fa-ellipsis-v ">…</i></td>
          
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
              float-right pr-3
            "
          >
            2
          </th>
          <td class="py-4 px-32">عدن</td>
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
              float-right pr-3
            "
          >
           3
          </th>
          <td class="py-4 px-28">حضرموت</td>
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