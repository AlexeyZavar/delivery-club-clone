<template>
  <div id="header" :class="scrolled ? 'scrolled' : 'unscrolled'">
    <div class="flex flex-row co space-x-12">
      <nuxt-link to="/">
        <div class="header-item flex-row h-12">
          <img
            src="https://yastatic.net/q/logoaas/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg?size=29.5&color=fff&first=fff"
          />
          <img
            src="https://yastatic.net/q/logoaas/%20%D0%9B%D0%B0%D0%B2%D0%BA%D0%B0.svg?size=29.5&color=fff&first=fff"
          />
        </div>
      </nuxt-link>
      <div class="header-item">
        <p>
          <nuxt-link to="catalog"> Каталог </nuxt-link>
        </p>
      </div>
      <div class="pr-5 header-item absolute right-0">
        <img
          class="cursor-pointer"
          src="~/assets/images/cart.png"
          alt="Корзина"
          @click="cart()"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    scrolled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showCart: false,
    }
  },
  methods: {
    cart() {
      this.showCart = !this.showCart
      this.$emit('updateCartState', this.showCart)
    },
  },
})
</script>

<style scoped>
#header {
  @apply pl-10 md:pl-0 bg-white text-black fixed transition-all duration-150 flex justify-start md:justify-center items-center z-50 w-full;
}

.scrolled {
  @apply h-16 shadow-xl;
}

#header > div > a > div > img {
  filter: invert(100%);
}

.unscrolled {
  @apply h-20 border-b-2;
}

.header-item {
  @apply flex justify-center items-center h-16;
}
</style>
