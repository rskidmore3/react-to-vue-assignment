<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />

<div class="border red-background rounded" style="width: 300px; height: 500px; ">
  <div class="header-border header-size border-bottom border-black d-flex justify-content-center" style="width: 100%; height: 50px">    
    <h2> 
      Games List
    </h2>
  </div>
  <div v-for="(item, index) in $store.state.games" :key="index">{{ item.name }} {{ item.publisher }} {{ item.rating }}</div>
</div>

</template>
