<template>
    <!-- <a-entity position="-5.5 -2 -15" :text="`value: ${content}; color:#fff; align:left; wrapCount: 16;`" 
        geometry="primitive: plane; width: 5; height:auto" material="color:#ce6548; shader:flat;visible:true"
        ></a-entity> -->
    <a-entity position="0 -10 -15" :text="`value: ${content}; color:#fff; align:left; wrapCount: 28;`"
        geometry="primitive: plane; width: 10; height:auto" material="color:#ce6548; shader:flat;visible:true"
        scale="1.5 1.5 1.5"></a-entity>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
const props = defineProps(['vol'])
let content = ref<string>('')

watch(() => props.vol, () => {
    content.value = `vol: ${props.vol}

    The louder the input sound, the faster the rocket rotates.

    Click on the rocket or when the sound reaches 100 decibels, 
    it will shuttle to the AR world.
`
})

</script>

<style lang='scss' scoped></style>