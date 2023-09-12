<template>
    <div class="main">
        <div class="arjs-loader" v-if="!isMounted">
            Loading, please wait...
        </div>
        <a-scene embedded arjs v-else>
            <a-marker preset="hiro">
                <a-entity position="0 0 0" scale="5 5 5" gltf-model="/models/gift/scene.gltf"
                    animation="property: rotation; to: 0 360 0; dur: 4000; loop: true; easing:linear;"></a-entity>
            </a-marker>
            <a-entity camera>
                <!-- <a-cursor></a-cursor> -->
            </a-entity>
            <a-entity position="0 3 -10" text="value: AR World; color:#fff; align:center; wrapCount: 9;"
                scale="2 2 2" geometry="primitive: plane; width: auto; height:0.5"
                material="color:#ce6548; shader:flat;visible:true" scale-on-mouseenter></a-entity>
            <a-entity light="type: directional; color: #FFF; intensity: 0.8" position="5 5 10"></a-entity>
        </a-scene>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

let isMounted = ref(false)

const emits = defineEmits(['toVr'])

// const travel = ()=>{
//     emits('toVr')
// }

onMounted(async () => {
    await import('@ar-js-org/ar.js/aframe/build/aframe-ar.js')
    isMounted.value = true
    // eventBind()
})
</script>

<style lang='scss' scoped>
.main {
    height: 100%;
    width: 100%;
    overflow: hidden;

    .arjs-loader {
        height: 100%;
        width: 100%;
        text-align: center;
    }
}
</style>