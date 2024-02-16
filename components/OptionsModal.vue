<template>
  <div
    class="px-1 md:px-10 py-5 md:py-10 flex flex-col items-center md:items-start md:flex-row space-x-6 space-y-6 md:space-y-0 justify-between rounded-xl"
  >
    <img
      class="h-5/6 w-5/6 max-h-96 max-w-96 rounded-lg"
      src="~assets/placeholders/food.jpg"
      alt=""
    />
    <div class="relative h-60 md:h-96 w-5/6">
      <p class="py-1 font-bold text-2xl">{{ food.name }}</p>
      <p>{{ food.description }}</p>
      <p class="mt-5 font-bold">Дополнительные опции</p>
      <div class="mt-2">
        <options-chooser
          :type="food.additionsType"
          :items="food.additions"
          @onSelectionChanged="selected"
        />
      </div>
      <div class="absolute bottom-0">
        <gradient-button @click.native="addItem"
          >Добавить в корзину</gradient-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import OptionsChooser from '~/components/OptionsChooser.vue'
import GradientButton from '~/components/GradientButton.vue'
import { cartStore } from '~/store'
import { AdditionsType, Food, FoodAddition, CartItem } from '~/data/models'

export default Vue.extend({
  components: { GradientButton, OptionsChooser },
  props: {
    food: {
      type: Food,
      required: true,
    },
  },
  data() {
    const selectedAdditions: { [id: number]: boolean } = {}

    return {
      selectedAdditions,
    }
  },
  methods: {
    addItem() {
      const additions: FoodAddition[] = []
      Object.entries(this.selectedAdditions).forEach((_, index) => {
        if (this.selectedAdditions[index + 1])
          additions.push(this.food.additions[index])
      })

      const a = new CartItem(this.food, 1, additions)

      cartStore.addItem(a)
      this.$modal.hideAll()
    },
    selected(values: { [id: number]: boolean }) {
      this.selectedAdditions = values
    },
  },
})
</script>

<style scoped></style>
