<template>
  <div v-scroll="onScroll">
    <NavBar :scrolled="scrolled" @updateCartState="setCartState" />
    <div class="pt-20">
      <Nuxt />
    </div>
    <Cart :show="cartVisible" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import NavBar from '~/components/NavBar.vue'
import Cart from '~/components/Cart.vue'

export default Vue.extend({
  components: { Cart, NavBar },
  data() {
    return {
      scrolled: false,
      cartVisible: false,
    }
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 30
    },
    setCartState(state: boolean) {
      this.cartVisible = state
    },
  },
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');

html {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  @apply bg-gray-100;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
