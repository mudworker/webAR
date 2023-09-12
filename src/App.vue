<template>
  <VrWorld v-if="isVr" @toAr="() => changeWorld(false)"></VrWorld>
  <ArWorld v-else @toVr="() => changeWorld(true)"></ArWorld>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VrWorld from './components/VrWorld/index.vue'
import ArWorld from './components/ArWorld/index.vue'
let isVr = ref(true)

const changeWorld = (val: boolean) => {
  isVr.value = val
}
</script>

<style lang="scss" scoped></style>
