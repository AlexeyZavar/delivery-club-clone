<template>
  <div
    class="p-2 m-1 bg-white flex flex-col lg:flex-row lg:justify-between items-center border-2 rounded-2xl gap-4 whitespace-nowrap"
  >
    <div>
      <p>{{ item.food.name }}</p>
    </div>
    <div class="w-3/4 lg:w-4/12">
      <div v-for="addition in item.selectedAdditions" :key="addition.id">
        <div class="px-2 flex flex-row justify-between">
          <p>• {{ addition.name }}</p>
          <p>{{ addition.price }} ₽</p>
        </div>
      </div>
    </div>
    <p class="font-mono">{{ total_price }} ₽</p>
    <div class="flex flex-row gap-1">
      <gradient-button rounded @click.native="decrement_count()"
        >-</gradient-button
      >
      <div class="px-2 bg-gray-100 rounded-full">
        <p class="font-bold font-mono">x{{ item.count }}</p>
      </div>
      <gradient-button rounded @click.native="increment_count()"
        >+</gradient-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { CartItem } from '~/data/models'
import GradientButton from '~/components/GradientButton.vue'
import { cartStore } from '~/plugins/store-accessor'

export default Vue.extend({
  name: 'CartCard',
  components: { GradientButton },
  props: {
    item: {
      type: Object as PropType<CartItem>,
      required: true,
    },
  },
  computed: {
    total_price() {
      let total = 0
      total += this.item.food.price * this.item.count

      this.item.selectedAdditions.forEach(
        (addition) => (total += addition.price * this.item.count)
      )

      return total
    },
  },
  methods: {
    increment_count() {
      cartStore.addItem(this.item)
    },
    decrement_count() {
      cartStore.removeItem(this.item)
    },
  },
})
</script>

<style scoped></style>
