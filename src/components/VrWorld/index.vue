<template>
  <div class="main">
    <div class="vol">volume: {{ vol }}</div>
    <a-scene background="transparent:true" fog="type: linear; color: #AAA">
      <!-- <Snowman></Snowman> -->
      <!-- <OtherEntities></OtherEntities> -->
      <Rocket :vol="vol" @toAr="emits('toAr')"></Rocket>
      <Background></Background>

      <Instructions :vol="vol"></Instructions>

      <a-entity light="type: ambient; color: #405e94"></a-entity>
      <a-entity light="type: directional; color: #FFF; intensity: 0.8" position="5 5 10"></a-entity>
      <a-camera>
        <a-cursor></a-cursor>
      </a-camera>
    </a-scene>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import Snowman from './Snowman.vue'
// import OtherEntities from './OtherEntities.vue'
import Rocket from './Rocket.vue'
import Background from './Background.vue'
import Instructions from '../Instructions.vue';

const emits = defineEmits(['toAr'])

let vol = ref<number>(0)
navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(function (stream) {
  //创建一个音频环境对像
  let audioContext = window.AudioContext || window.webkitAudioContext
  let context: AudioContext = new audioContext()
  //将声音输入这个对像
  let audioInput: MediaStreamAudioSourceNode = context.createMediaStreamSource(stream)

  //设置音量节点
  let volume = context.createGain()
  audioInput.connect(volume)

  //创建缓存，用来缓存声音
  const bufferSize: number = 2048

  // 创建声音的缓存节点，createJavaScriptNode方法的
  // 第二个和第三个参数指的是输入和输出都是双声道。
  let recorder = context.createScriptProcessor(bufferSize, 1, 1)

  // 录音过程的回调函数，基本上是将左右两声道的声音
  recorder.onaudioprocess = function (e) {
    var buffer = e.inputBuffer.getChannelData(0); //获得缓冲区的输入音频，转换为包含了PCM通道数据的32位浮点数组
    //创建变量并迭代来获取最大的音量值
    var maxVal = 0
    for (var i = 0; i < buffer.length; i++) {
      if (maxVal < buffer[i]) {
        maxVal = buffer[i]
      }
    }
    //显示音量值
    vol.value = Math.round(maxVal * 100)
  }

  // 将音量节点连上缓存节点，换言之，音量节点是输入和输出的中间环节。
  volume.connect(recorder)

  //将缓存节点连上输出的目的地，可以是扩音器，也可以是音频文件。
  recorder.connect(context.destination)

}).catch(function (error) {
  console.log(error)
})
</script>

<style lang='scss' scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;

  .vol {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    color: #fff;
  }
}
</style>