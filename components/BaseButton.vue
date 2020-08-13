<template>
  <button
    class="root"
    :class="contextAwareTone"
  >
    <slot/>
  </button>
</template>

<script>
import { computed, inject } from 'vue';

import { BackgroundColorProviderSymbol } from './ProvideBackgroundColor.vue';

export default {
  props: {
    tone: {
      default: null,
      type: String,
    },
  },
  setup(props) {
    // Her we inject the `tone` provided be the BackgroundColorProvider context.
    const { tone: toneFromContext } = inject(BackgroundColorProviderSymbol, {});
    const defaultTone = `dark`;
    const contextAwareTone = computed(() => {
      // If a `tone` is explicitly set as a prop, we always use that.
      if (props.tone) return props.tone;
      // If no `tone` is provided by the context, we use the `defaultTone`.
      if (!toneFromContext) return defaultTone;

      // Here we specify that we want to render a `light` variant of our button
      // on a `dark` background and vice versa.
      return toneFromContext.value === `dark` ? `light` : `dark`;
    });

    return { contextAwareTone };
  },
};
</script>

<style>
.root {
  background-color: transparent;
  border: none;
  padding: 1em 2em;
  font: inherit;
}

.dark {
  background-color: black;
  color: white;
}

.light {
  background-color: white;
  color: black;
}
</style>
