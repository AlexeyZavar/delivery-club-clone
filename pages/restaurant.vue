<template>
  <div>
    <div
      class="bg-white flex flex-row items-center justify-between border-b-2 h-24 md:h-48"
    >
      <p class="ml-8 lg:ml-32 font-bold text-2xl md:text-6xl">#FARШ</p>
      <div
        class="mr-8 lg:mr-32 order-last h-16 w-16 md:h-32 md:w-32 flex items-center border-2 rounded-3xl"
      >
        <img
          class="rounded-2xl w-full h-full"
          src="~assets/placeholders/restaurant.jpg"
          alt=""
        />
      </div>
    </div>
    <div
      class="mt-5 px-4 sm:px-16 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-x-12 gap-y-6 items-center justify-center w-full"
    >
      <food-card v-for="food in restaurant.feed" :key="food.id" :food="food" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import FoodCard from '~/components/FoodCard.vue'
import { AdditionsType, Food, FoodAddition, Restaurant } from '~/data/models'

export default Vue.extend({
  components: { FoodCard },
  layout: 'main',
  data() {
    return {
      scrolled: false,
    }
  },
  computed: {
    restaurant() {
      const id = this.$route.query.id

      const food = new Food(
        1,
        'Картофель Фри',
        'https://www.delivery-club.ru/media/cms/relation_product/31776/311728667_m650.jpg?resize=fit&width=1300&height=544&gravity=ce&out=webp',
        'Горячее',
        'Сочные хрустящие картофельные палочки прямо из печи!',
        200,
        [
          new FoodAddition(1, 'Соус Кислосладкий', 49),
          new FoodAddition(2, 'Соус Сырный', 49),
          new FoodAddition(3, 'Майонез', 49),
        ],
        AdditionsType.Single
      )

      const l = []

      for (let i = 2; i < 13; i++) {
        const clone = { ...food }
        clone.id = i
        clone.name += i
        clone.additionsType =
          Math.random() < 0.5 ? AdditionsType.Single : AdditionsType.Multi
        l.push(clone)
      }

      return new Restaurant(
        1,
        '#FARШ',
        'https://www.delivery-club.ru/logos_full/mcdonalds_msk.jpg?161771&resize=fit&width=224&height=224&gravity=ce&out=webp',
        'https://www.delivery-club.ru/naturmort/602f8637334f3_480x300.jpg?resize=fill&width=960&height=960&gravity=ce&out=webp',
        'Фастфуд',
        l
      )
    },
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 30
    },
  },
})
</script>

<style scoped></style>
