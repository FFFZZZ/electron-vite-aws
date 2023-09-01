<script setup lang="ts">
import { ipcRenderer } from 'electron';

const upload=()=>{
  ipcRenderer.send("uploadFile")
}
</script>

<template>
  <button @click="upload">上传文件</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
