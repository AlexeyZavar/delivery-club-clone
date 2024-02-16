<template>
  <div
    class="pb-5 rounded-2xl shadow bg-white"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @click="showModal"
  >
    <div>
      <img class="h-60 w-full rounded-t-2xl" src="~assets/placeholders/food.jpg" alt="" />
    </div>
    <div class="mt-3 px-5">
      <p class="py-1 font-bold">{{ food.name }}</p>
      <p class="text-gray-400">
        {{ food.description }}
      </p>
      <div class="mt-2 flex justify-between">
        <p class="font-bold">{{ food.price }} ₽</p>
        <gradient-button
          :class="hover ? 'opacity-100 visible' : 'opacity-0 invisible'"
        >
          В корзину →
        </gradient-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import OptionsModal from '~/components/OptionsModal.vue'
import GradientButton from '~/components/GradientButton.vue'
import { cartStore } from '~/plugins/store-accessor'
import { Food } from '~/data/models'

export default Vue.extend({
  name: 'FoodCard',
  components: { GradientButton },
  props: {
    food: {
      type: Food,
      required: true,
    },
  },
  data() {
    return {
      hover: false,
    }
  },
  methods: {
    showModal() {
      this.hover = false
      this.$modal.show(
        OptionsModal,
        { food: this.food },
        { adaptive: true, width: '960px', height: 'auto', styles: 'h-screen' }
      )
    },
  },
})
</script>

<style scoped></style>
