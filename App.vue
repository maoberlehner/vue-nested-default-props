<template>
  <ProvideBackgroundColor background-color="white">
    <ProvideWidth :width="[375, `767@xs`, `1023@s`, `1279@m`, `1919@l`, `2559@xl`]">
      <BaseGrid>
        <BaseGridItem :width="[`12/12`, `6/12@m`]">
          <BaseGrid>
            <BaseGridItem :width="[`12/12`, `6/12@m`]">
              <h2>Aspect ratio</h2>
              <BaseImage
                aspect-ratio="16/9"
                src="https://images.unsplash.com/photo-1585108592681-d0db82bab204?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80"
              />
            </BaseGridItem>
          </BaseGrid>
          <h2>Fixed</h2>
          <BaseImage
            :width="300"
            :height="300"
            src="https://images.unsplash.com/photo-1585108592681-d0db82bab204?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80"
          />
        </BaseGridItem>
      </BaseGrid>
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
    </ProvideWidth>
  </ProvideBackgroundColor>
</template>

<script>
import ProvideBackgroundColor from './components/ProvideBackgroundColor.vue';
import ProvideWidth from './components/ProvideWidth.vue';
import BaseButton from './components/BaseButton.vue';
import BaseGrid from './components/BaseGrid.vue';
import BaseGridItem from './components/BaseGridItem.vue';
import BaseImage from './components/BaseImage.vue';
import BaseIsland from './components/BaseIsland.vue';

export default {
  components: {
    BaseButton,
    BaseGrid,
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
  padding: 1rem;
  margin: 0;
}
</style>
