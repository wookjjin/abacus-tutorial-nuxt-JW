<script setup lang="ts">

</script>
    
<template>
  <div class="container">
    <p>Default layout</p>
    <slot />
  </div>
</template>


<style lang="scss" scoped>
.container {
  display: flex;

  p {
    align-items: center;
  }
}
</style>