<template>
  <ProvideBackgroundColor background-color="white">
    <ProvideWidth :width="[375, `768@s`, `1024@m`, `1280@l`, `1920@xl`]">
      <div>
        <BaseGridItem :width="[`12/12`, `6/12@m`]">
          <BaseImage/>
        </BaseGridItem>
        <BaseIsland background-color="white">
          <BaseButton>
            Dark Button
          </BaseButton>
        </BaseIsland>
        <BaseIsland background-color="black">
          <BaseButton>
            Light Button
          </BaseButton>
        </BaseIsland>
      </div>
    </ProvideWidth>
  </ProvideBackgroundColor>
</template>

<script>
import { ref } from "vue";

import ProvideBackgroundColor from "./components/ProvideBackgroundColor.vue";
import ProvideWidth from "./components/ProvideWidth.vue";
import BaseButton from "./components/BaseButton.vue";
import BaseGridItem from "./components/BaseGridItem.vue";
import BaseImage from "./components/BaseImage.vue";
import BaseIsland from "./components/BaseIsland.vue";

export default {
  components: {
    BaseButton,
    BaseGridItem,
    BaseImage,
    BaseIsland,
    ProvideBackgroundColor,
    ProvideWidth,
  },
};
</script>

<style>
body {
  background-color: #efefef;
  padding: 2rem;
}
</style>
