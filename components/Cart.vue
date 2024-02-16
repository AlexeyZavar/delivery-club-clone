<template>
  <div
    class="p-4 fixed transition transition-all duration-100 shadow-2xl right-0 bottom-0 bg-white z-50 w-full lg:w-3/5 xl:w-3/5 2xl:w-2/5 h-3/4"
    :class="show ? 'opacity-100 visible' : 'opacity-0 invisible'"
  >
    <div class="flex flex-col gap-3">
      <cart-card v-for="item in items" :key="item.food.id" :item="item" />
    </div>
    <p class="font-bold">Общая сумма: {{ sum }}</p>
    <div class="mt-5 flex">
      <gradient-button @click.native="$router.push('order')"
        >Перейти к оформлению заказа →</gradient-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import CartCard from '~/components/CartCard.vue'
import { cartStore } from '~/plugins/store-accessor'
import GradientButton from '~/components/GradientButton.vue'

export default Vue.extend({
  name: 'Cart',
  components: { GradientButton, CartCard },
  props: {
    show: {
      type: Boolean,
    },
  },
  data() {
    return {
      items: cartStore.cartItems,
      sum: cartStore.sum,
    }
  },
})
</script>

<style scoped></style>
