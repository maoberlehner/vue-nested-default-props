<template>
  <slot/>
</template>

<script>
import {
  computed,
  inject,
  provide,
} from 'vue';

import { asArray } from '../utils/as-array';
import { breakpoints } from '../config/breakpoints';
import { isNumber } from '../utils/is-number';
import { toString } from '../utils/to-string';

const DEFAULT_BREAKPOINT = `default`;

export const WidthProviderSymbol = Symbol(`Width provider identifier`);

function useBreakpointWidthsRatios(responsiveWidthOrWidths) {
  return computed(() => {
    const breakpointWidthsRatios = {};
    const responsiveWidths = asArray(responsiveWidthOrWidths);

    // eslint-disable-next-line no-restricted-syntax
    for (const responsiveWidth of responsiveWidths) {
      const [width, breakpoint] = toString(responsiveWidth).split(`@`);
      breakpointWidthsRatios[breakpoint || DEFAULT_BREAKPOINT] = width;
    }

    return breakpointWidthsRatios;
  });
}

function useBreakpointWidths({ breakpointWidthsRatios, parentBreakpointWidths }) {
  return computed(() => {
    const breakpointWidths = {};

    let width = `12/12`;
    // eslint-disable-next-line no-restricted-syntax
    for (const breakpoint of Object.keys(breakpoints)) {
      // If there is no width for a certain breakpoint we assume full
      // width or the same width as at the previous breakpoint.
      width = breakpointWidthsRatios.value[breakpoint] || width;

      if (isNumber(width)) {
        breakpointWidths[breakpoint] = parseInt(width, 10);
        // eslint-disable-next-line no-continue
        continue;
      }

      const [columns, maxColumns] = width.split(`/`).map(x => parseInt(x, 10));
      const factor = columns / maxColumns;

      breakpointWidths[breakpoint] = Math.round(parentBreakpointWidths.value[breakpoint] * factor);
    }

    return breakpointWidths;
  });
}

export default {
  props: {
    width: {
      required: true,
      type: [Array, Number, String],
    },
  },
  setup(props) {
    const parentBreakpointWidths = inject(WidthProviderSymbol, { [DEFAULT_BREAKPOINT]: 375 });
    const breakpointWidthsRatios = useBreakpointWidthsRatios(props.width);
    const breakpointWidths = useBreakpointWidths({
      breakpointWidthsRatios,
      parentBreakpointWidths,
    });

    provide(WidthProviderSymbol, breakpointWidths);
  },
};
</script>
