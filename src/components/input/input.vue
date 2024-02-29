<template>
  <div>
    <input placeholder="搜索" class="search" :bind="$attrs" type="text" />
  </div>
</template>
<script setup>

</script>
<style scoped>
  .search{
    height: 25px;
    border-radius: 3px;
    border: 1px solid transparent;
    width: 135px;
    box-sizing: border-box;
    padding: 0 5px;
    background-color: #e0e0e0;
  }
  .search:focus{
    outline: none;
    border: 1px solid #0077aa;

  }
</style>
