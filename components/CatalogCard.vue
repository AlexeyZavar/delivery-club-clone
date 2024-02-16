<template>
  <div
    class="bg-white h-64 rounded-2xl shadow transform transition duration-100 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer"
    @click="goToRestaurant"
  >
    <div>
      <img
        class="h-44 w-full rounded-t-2xl"
        src="~assets/placeholders/restaurant.jpg"
        alt=""
      />
    </div>
    <div>
      <p class="mt-2 ml-4 font-bold text-2xl">#FARШ</p>
      <div class="mt-1">
        <div class="ml-4 px-2 bg-gray-200 rounded-3xl w-max">
          <p>Фастфуд</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Restaurant } from '~/data/models'

export default Vue.extend({
  props: {
    restaurant: {
      type: Restaurant,
      required: true,
    },
  },
  methods: {
    goToRestaurant() {
      this.$router.push('restaurant')
    },
  },
})
</script>

<style scoped></style>
