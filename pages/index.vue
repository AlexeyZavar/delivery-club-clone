<template>
  <div v-scroll="onScroll" class="content">
    <div id="header" :class="scrolled ? 'scrolled' : 'unscrolled'">
      <div class="flex flex-row space-x-12">
        <div class="header-item flex-row h-12">
          <img
            src="https://yastatic.net/q/logoaas/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg?size=29.5&color=fff&first=fff"
          />
          <img
            src="https://yastatic.net/q/logoaas/%20%D0%9B%D0%B0%D0%B2%D0%BA%D0%B0.svg?size=29.5&color=fff&first=fff"
          />
        </div>
        <div class="header-item">
          <p>
            <nuxt-link to="catalog"> Каталог </nuxt-link>
          </p>
        </div>
      </div>
    </div>
    <div id="content">
      <div id="landing-1">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:px-60 md:px-32 md:py-16">
          <div class="text-center justify-self-center w-96 h-auto">
            <p class="text-6xl font-thin uppercase">
              <span class="font-bold">Экспресс</span> доставка еды
            </p>
          </div>
          <div class="flex justify-center w-96 h-auto">
            <img
              src="https://purepng.com/public/uploads/large/purepng.com-iphone-appleiphone-appleiphoneappleapple-inciosmobile-1701528352466grwej.png"
              alt=""
              class="h-72"
            />
          </div>
        </div>
        <img
          class="absolute bottom-0 left-0 w-full"
          src="~/assets/images/landing-waves.svg"
          alt="Waves"
        />
      </div>
      <div id="landing-2">
        <nuxt-link
          class="p-3 text-2xl md:text-5xl rounded-full bg-gradient-to-tr bg-white hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-150"
          to="catalog"
        >
          Перейти к ресторанам →
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      scrolled: false,
    }
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 30
    },
  },
})
</script>

<style>
.content {
  @apply text-white;
}

#header {
  @apply fixed transition-all duration-150 flex justify-center items-center z-50 w-full;
}

#landing-1 {
  @apply relative pt-24 landing-1-bg flex justify-center h-screen w-full;
}

.landing-1-bg {
  @apply bg-gradient-to-tr from-indigo-500 to-purple-500;
}

#landing-2 {
  @apply py-20 bg-white w-full text-black flex justify-center;
}

.scrolled {
  @apply bg-white h-16 text-black shadow-xl;
}

.scrolled > div > div > img {
  filter: invert(100%);
}

.unscrolled {
  @apply bg-transparent h-20 text-white;
}

.header-item {
  @apply flex justify-center items-center h-16;
}
</style>
