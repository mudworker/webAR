<template>
    <a-entity position="0 0 0">
        <a-entity position="0 3 -10" text="value: Rocket to AR World; color:#fff; align:center; wrapCount: 9;" scale="2 2 2"
            geometry="primitive: plane; width: auto; height:0.5" material="color:#ce6548; shader:flat;visible:true"
            scale-on-mouseenter></a-entity>
        <!-- animation="property: rotation; to: 0 360 0; dur: 2000; loop: true; easing:linear;" -->
        <a-entity position="0 1 -10" offset="0 2 -15" fly-on-click>
            <a-cone position="0 0 0" height="2" radius-bottom="1" radius-top="0"
                material="shader: standard; color: #ce6548; metalness: 0"></a-cone>

            <a-cylinder position="0 -2 0" height="2" radius="1"
                material="shader: standard; color: #fff; metalness: 0.3"></a-cylinder>

            <a-cylinder position="-1.2 -3 0" height="1" radius="0.2"
                material="shader: standard; color: #ce6548; metalness: 0"></a-cylinder>

            <a-cylinder position="1.2 -3 0" height="1" radius="0.2"
                material="shader: standard; color: #ce6548; metalness: 0"></a-cylinder>

            <a-cylinder position="0 -3 -1.2" height="1" radius="0.2"
                material="shader: standard; color: #ce6548; metalness: 0"></a-cylinder>
            <a-cylinder position="0 -3 1.2" height="1" radius="0.2"
                material="shader: standard; color: #ce6548; metalness: 0"></a-cylinder>
        </a-entity>
    </a-entity>
</template>

<script setup>
import { onMounted } from 'vue'
const props = defineProps(['vol'])
const emits = defineEmits(['toAr'])

let rocketEl = null
const eventBind = () => {
    // 通过js注册组件，并绑定到对应的dom上
    AFRAME.registerComponent('scale-on-mouseenter', {
        schema: {
            from: { default: '2 2 2', type: 'vec3' },
            to: { default: '4 4 4', type: 'vec3' }
        },
        init: function () {
            let data = this.data
            let el = this.el
            this.el.addEventListener('mouseenter', function () {
                el.object3D.scale.copy(data.to);
            })

            this.el.addEventListener('mouseleave', function () {
                el.object3D.scale.copy(data.from);
            })
        }
    });

    AFRAME.registerComponent('fly-on-click', {
        init: function () {
            rocketEl = this.el
            this.el.addEventListener('mouseup', fly);
        }
    });
}

let isFly = false
const fly = () => {
    if (!isFly) {
        isFly = true
        rocketEl.setAttribute('animation__001', {
            'property': 'position',
            'to': { y: 100 },
            'startEvents': 'startanim001'
        })

        rocketEl.emit(`startanim001`, null, false)

        setTimeout(() => {
            emits('toAr')
        }, 1000)
    }
}

// 根据声音旋转火箭
// 因为aframe不能动态改变animation的速率（会严重卡顿），所以只能自己写个定时器实时改变旋转角度
let rotation = 0
const initRotateRat = 2
const rotateWhitVol = () => {
    rotation += props.vol > 50 ? 25 : props.vol/2 + initRotateRat
    rocketEl?.setAttribute('rotation', `0 ${rotation} 0`)
    if (props.vol >= 100) {
        fly()
    }
    // let y = 360
    // let max = 720
    // y = (max - y) / 50 * props.vol + y
    // rocketEl.setAttribute('animation',null)
    // rocketEl.setAttribute('animation', {
    //     'property': 'rotation',
    //     'from': rocketEl.object3D.rotation,
    //     'to': { y: 360 + rocketEl.object3D.rotation },
    //     'dur': 1000,
    //     // 'loop': true,
    //     'easing': 'linear',
    //     'resumeEvents': 'startanim002'
    // })
    // rocketEl.emit(`startanim002`, null, false)
}

onMounted(() => {
    eventBind()
    // 设置30帧
    setInterval(() => {
        rotateWhitVol()
    }, 1000 / 30)
})
</script>

<style lang='scss' scoped></style>