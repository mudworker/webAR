<template>
    <a-assets>
        <img id="skyTexture" :src="bg">
    </a-assets>
    <a-sky src="#skyTexture" phi-start="7"></a-sky>
</template>

<script lang="ts" setup>
import bg from '@/assets/images/bg3.jpg'

</script>

<style lang='scss' scoped></style>