<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import { myFetch } from './composables/myFetch'

const data = ref({
  count: 0
})

const getApi = () => {
  myFetch('count/646c5fc6ea61bcdd6cf3ae17').then((res: any) => {
    data.value = res
  })
}
getApi()

const toggleCount = () => {
  myFetch('count/646c5fc6ea61bcdd6cf3ae17', 'PATCH', { count: data.value.count + 1 }).then(() => {
    data.value.count = data.value.count + 1
  })
}

</script>

<template>
  <div class="card">
    <button type="button" @click="() => toggleCount()">count is {{ data.count }}</button>
  </div>
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
.read-the-docs {
  color: #888;
}
</style>
