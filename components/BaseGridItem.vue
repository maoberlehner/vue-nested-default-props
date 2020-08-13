<template>
  <ProvideWidth width="3/12">
    <div>
      <slot/>
    </div>
  </ProvideWidth>
</template>

<script>
import { inject } from "vue";

import ProvideWidth from "./ProvideWidth.vue";

export default {
  components: {
    ProvideWidth,
  },
};
</script>
