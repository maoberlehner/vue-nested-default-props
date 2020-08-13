<script>
import {
  computed,
  provide,
  reactive,
  toRefs,
} from 'vue';

export const BackgroundColorProviderSymbol = Symbol(`Background color provider identifier`);

const darkColors = [`black`, `darkGray`];
const lightColors = [`white`, `lightGray`];
const colors = [...darkColors, ...lightColors];

export default {
  props: {
    backgroundColor: {
      default: `white`,
      type: String,
      // Check if the given color is valid.
      validator(value) {
        return colors.includes(value);
      },
    },
  },
  setup(props) {
    // We can have unlimited background colors but only two tones.
    // But depending on your use-case, there can also be more tones.
    const tone = computed(() => {
      if (darkColors.includes(props.backgroundColor)) return `dark`;
      return `light`;
    });
    const state = reactive({
      backgroundColor: props.backgroundColor,
      tone,
    });

    provide(BackgroundColorProviderSymbol, toRefs(state));
  },
  render() {
    // Our provider component is a renderless component
    // it does not render any markup of its own.
    return this.$slots.default();
  },
};
</script>
