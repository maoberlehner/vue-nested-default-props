<script>
import {
  provide, reactive, ref, toRef, inject, computed,
} from "vue";

export const WidthProviderSymbol = Symbol(`Width provider identifier`);

const DEFAULT_BREAKPOINT = `default`;
const asArray = x => [].concat(x);
const toString = x => `${x}`;

export default {
  props: {
    width: {
      required: true,
      type: [Array, Number, String],
    },
  },
  setup(props) {
    // TODO funktioniert das reactive, wenn props.width sich ändert?
    const widths = asArray(props.width);

    const result = reactive({});
    widths.forEach((responsiveWidth) => {
      const [width, breakpoint] = toString(responsiveWidth).split(`@`);

      // TODO normalizen
      if (isNaN(width)) {
        const parentWidth = inject(WidthProviderSymbol);
        const [dividend, divisor] = width.split(`/`).map(x => parseInt(x, 10));
        const quotient = dividend / divisor;
        const xxxBreakpoint = breakpoint || DEFAULT_BREAKPOINT;
        result[xxxBreakpoint] = parentWidth[xxxBreakpoint] * quotient;
        return;
      }

      result[breakpoint || DEFAULT_BREAKPOINT] = parseInt(width, 10);
    });

    provide(WidthProviderSymbol, result);
  },
  render() {
    // Our provider component is a renderless component
    // it does not render any markup of its own.
    return this.$slots.default();
  },
};
</script>
