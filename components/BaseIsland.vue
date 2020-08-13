<template>
  <ProvideBackgroundColor :background-color="backgroundColor">
    <div :class="`bg-${backgroundColor} p-${padding}`">
      <slot/>
    </div>
  </ProvideBackgroundColor>
</template>

<script>
import ProvideBackgroundColor from './ProvideBackgroundColor.vue';

export default {
  components: {
    ProvideBackgroundColor,
  },
  props: {
    backgroundColor: {
      default: `white`,
      type: String,
    },
    padding: {
      default: `4`,
      type: String,
    },
  },
};
</script>

<style>
.bg-white {
  background-color: white;
}

.bg-black {
  background-color: black;
}

.p-4 {
  padding: 2rem;
}
</style>
