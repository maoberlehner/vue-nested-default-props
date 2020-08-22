<template>
  <ProvideWidth :width="width">
    <div
      class="BaseGridItem"
      :class="widths.map(x => `width-${x}`)"
    >
      <slot/>
    </div>
  </ProvideWidth>
</template>

<script>
import { computed } from 'vue';

import { asArray } from '../utils/as-array';

import ProvideWidth from './ProvideWidth.vue';

export default {
  name: `BaseGridItem`,
  components: {
    ProvideWidth,
  },
  props: {
    width: {
      default: `12/12`,
      type: [Array, String],
    },
  },
  setup(props) {
    const widths = computed(() => asArray(props.width));

    return { widths };
  },
};
</script>

<style>
.BaseGridItem {
  padding-top: 1rem;
  padding-left: 1rem;
}

.width-12\/12 {
  width: 100%;
}

@media (min-width: 1024px) {
  .width-6\/12\@m {
    width: 50%;
  }
}
</style>
