<template>
  <div class="BaseGrid">
    <slot/>
  </div>
</template>

<script>
export default {
  name: `BaseGrid`,
};
</script>

<style>
.BaseGrid {
  display: flex;;
  margin-top: -1em;
  margin-left: -1em;
  flex-wrap: wrap;
}
</style>
