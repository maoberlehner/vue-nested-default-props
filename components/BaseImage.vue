<template>
  <img
    :src="attributes.src"
    :srcset="srcset || attributes.srcset"
    :sizes="sizes || attributes.sizes"
    :width="width || attributes.width"
    :height="height || attributes.height"
    class="BaseImage"
  >
</template>

<script>
import {
  computed,
  inject,
} from 'vue';

import { breakpoints } from '../config/breakpoints';
import { calcAspectRatio } from '../utils/calc-aspect-ratio';

import { WidthProviderSymbol } from './ProvideWidth.vue';

function appendDimensions(src, { width, height }) {
  const srcUrl = new URL(src);
  srcUrl.searchParams.append(`w`, width);
  srcUrl.searchParams.append(`h`, height);

  return srcUrl.toString();
}

function useAttributes({ breakpointWidths, props }) {
  return computed(() => {
    if (props.width || props.height) {
      const { width, height } = calcAspectRatio(props.aspectRatio, {
        width: props.width,
        height: props.height,
      });

      return {
        src: appendDimensions(props.src, { width, height }),
        srcset: `${appendDimensions(props.src, { width: width * 2, height: height * 2 })} 2x`,
        sizes: null,
        width,
        height,
      };
    }

    const srcset = [];
    const sizes = [];
    const attributes = {
      src: null,
      srcset: null,
      sizes: null,
      width: null,
      height: null,
    };

    Object.keys(breakpointWidths.value).forEach((breakpoint) => {
      const width = breakpointWidths.value[breakpoint];
      const { height } = calcAspectRatio(props.aspectRatio, { width });
      const src = appendDimensions(props.src, { width, height });

      if (breakpoint === `default`) {
        attributes.src = src;
        attributes.width = width;
        attributes.height = height;
      }

      srcset.push(`${src} ${width}w`);
      sizes.push(`${breakpoints[breakpoint] ? `(min-width: ${breakpoints[breakpoint]}px) ` : ``}${width}px`);
    });

    attributes.srcset = srcset.join(`, `);
    attributes.sizes = [...sizes].reverse().join(`, `);

    return attributes;
  });
}

export default {
  props: {
    aspectRatio: {
      default: `16/9`,
      type: String,
    },
    width: {
      default: null,
      type: Number,
    },
    height: {
      default: null,
      type: Number,
    },
    src: {
      required: true,
      type: String,
    },
    srcset: {
      default: null,
      type: String,
    },
    sizes: {
      default: null,
      type: String,
    },
  },
  setup(props) {
    const breakpointWidths = inject(WidthProviderSymbol);
    const attributes = useAttributes({ breakpointWidths, props });

    return { attributes };
  },
};
</script>

<style>
.BaseImage {
  width: 100%;
  height: auto;
  vertical-align: middle;
}
</style>
