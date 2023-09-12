<template>
    <!-- body -->
    <a-sphere position="0 4 -15" radius="1.3" material="shader: standard; color: #fff; metalness: 0; roughness: 1"
        :animation="animation1">
    </a-sphere>
    <a-sphere position="0 2 -15" radius="2" material="shader: standard; color: #fff; metalness: 0; roughness: 1"
        :animation="animation2">
    </a-sphere>
    <a-sphere position="0 -1 -15" radius="3" material="shader: standard; color: #fff; metalness: 0; roughness: 1"
        :animation="animation3">
    </a-sphere>
    <!-- face -->
    <a-sphere position="-0.4 4.3 -13.9" radius="0.2"
        material="shader: standard; color: #000; metalness: 0; roughness: 1"></a-sphere>
    <a-sphere position="0.4 4.3 -13.9" radius="0.2"
        material="shader: standard; color: #000; metalness: 0; roughness: 1"></a-sphere>
    <a-cone position="0 4 -13.2" rotation="90 0 0" radius-bottom="0.2" radius-top="0"
        material="shader: standard; color: #ce6548; metalness: 0"></a-cone>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const getAnim = (pos: number, dur: number) => {
    return `property: object3D.position.x; from:-${pos}; to: ${pos}; dir: alternate; dur: ${dur}; loop: true; easing:easeInOutQuad;`
}
let animation1 = ref('')
let animation2 = ref('')
let animation3 = ref('')

onMounted(() => {
    // animation1.value = getAnim(0.1, 2000)
    // animation2.value = getAnim(0.17, 1500)
    // animation3.value = getAnim(0.12, 2000)
})
</script>

<style lang='scss' scoped></style>