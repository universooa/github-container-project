<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/layout/TheHeader.vue'

</script>

<template>
  <header>
  <TheHeader/>
  </header>

  <div class="wrapper">
    <RouterView />
  </div>


</template>

<style scoped>

header {
  position: sticky;
  top:0;
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {

  body {
    display: flex;
    place-items: center;
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}
</style>
