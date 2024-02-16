<template>
  <div id="banners" class="mt-6">
    <carousel
      autoplay
      autoplay-timeout="5000"
      adjustable-height
      pagination-position="bottom-overlay"
      pagination-size="6"
      per-page="1"
      loop
    >
      <slide>
        <img
          src="~assets/placeholders/banner.webp"
          alt=""
        />
      </slide>
      <slide>
        <img
          src="~assets/placeholders/banner.webp"
          alt=""
        />
      </slide>
    </carousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
#banners {
  @apply block h-48 sm:h-72 lg:h-80 rounded-3xl;
}

.VueCarousel-slide > img {
  @apply h-48 sm:h-72 lg:h-80 w-full;
}
</style>
