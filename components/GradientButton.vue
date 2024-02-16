<template>
  <button
    class="px-2 focus:outline-none font-extrabold bg-gradient-to-tr bg-white hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-150"
    :class="rounded ? 'rounded-full' : 'rounded-xl'"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'GradientButton',
  props: {
    rounded: {
      type: Boolean,
    },
  },
})
</script>

<style scoped></style>
