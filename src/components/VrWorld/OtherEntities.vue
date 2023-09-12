<template>
    <a-assets>
        <img id="boxTexture" :src="imgSrc">
    </a-assets>
    <a-box src="#boxTexture" position="3 2 -5" rotation="45 45 45" scale-on-mouseenter
        material="roughness: 1; shader: standard;"
        animation="property: object3D.position.y; to: 2.2; dir: alternate; dur: 2000; loop: true"
        @click="handleClick('box1')"></a-box>

    <a-box src="#boxTexture" position="-3 2 -5" rotation="45 45 45" scale-on-mouseenter
        material="roughness: 1; shader: standard;"
        animation="property: object3D.position.y; to: 2.2; dir: alternate; dur: 2000; loop: true"
        @click="handleClick('box2')"></a-box>

        <a-box src="#boxTexture" position="-3 2 0" scale-on-mouseenter
        material="roughness: 1; shader: standard;"
        animation="property: rotation; to: 0 360 0; dur: 2000; loop: true"
        @click="handleClick('box3')"></a-box>
</template>

<script lang="ts" setup>
import imgSrc from '@/assets/images/material.jpg'
const handleClick = (val: string) => {
    console.log(val)
}
</script>

<style lang='scss' scoped></style>