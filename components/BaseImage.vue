<template>
  <ul>
    <li
      v-for="breakpoint in Object.keys(xxx)"
      :key="breakpoint"
    >
      src: /img/{{ xxx[breakpoint] }}x{{ yyy[breakpoint] }}/name.jpg
      <template v-if="breakpoint !== `default`">
        {{ xxx[breakpoint] }}w
      </template>
    </li>
  </ul>
</template>

<script>
import { inject } from "vue";

import { WidthProviderSymbol } from "./ProvideWidth.vue";

export default {
  props: {
    // TODO selbe logik, die auch für responsive funktioniert
    width: {
      default: null,
      type: [Array, Number, String],
    },
    // TODO height und richtiges seitenverhältnis berechnen
    height: {
      default: null,
      type: [Array, Number, String],
    },
  },
  setup() {
    // TODO srcset generieren
    const xxx = inject(WidthProviderSymbol);
    const yyy = { default: null }; // TODO
    // TODO srcset sizes attribute
    // sizes="(min-width: 600px) 160px, 320px"
    // TODO 2x variants

    return { xxx, yyy };
  },
};
</script>
