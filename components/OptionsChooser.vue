<template>
  <div>
    <div v-for="item in items" :key="item.id" class="flex items-center">
      <input
        :ref="item.id"
        :type="type === 0 ? 'radio' : 'checkbox'"
        :checked="selected[item.id]"
        @change="
          type === 0
            ? change_checked_single(item)
            : change_checked_multi($event, item)
        "
      />
      <div class="w-full flex justify-between">
        <p class="ml-5">{{ item.name }}</p>
        <p class="mr-5 font-bold">+ {{ item.price }} ₽</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { AdditionsType, FoodAddition } from '~/data/models'

export default Vue.extend({
  props: {
    type: {
      type: Number as PropType<AdditionsType>,
      required: true,
    },
    items: {
      type: Array as PropType<FoodAddition[]>,
      required: true,
    },
  },
  data() {
    const selected: { [id: number]: boolean } = {}

    this.items.forEach((item) => (selected[item.id] = false))

    return {
      selected,
    }
  },
  methods: {
    change_checked_single(item: FoodAddition) {
      Object.entries(this.selected).forEach(
        (_, index) => (this.selected[index + 1] = index + 1 === item.id)
      )
      this.$emit('onSelectionChanged', this.selected)
    },
    change_checked_multi(event: Event, item: FoodAddition) {
      this.selected[item.id] = (event.currentTarget as HTMLInputElement).checked
      this.$emit('onSelectionChanged', this.selected)
    },
  },
})
</script>

<style scoped></style>
