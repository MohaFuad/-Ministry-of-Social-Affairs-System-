<template>
<div class="" style="font-family: 'Cairo', sans-serif;">
  
 
  <Screen />
  <router-view />

  
  

</div>

</template>

<script>
import Main from '@/components/Main.vue';
import Screen from '@/components/View/Screen.vue';
export default{
  name: 'App',
  components: {
    Main,
    Screen,
  }
}
</script>

<style>

</style>
