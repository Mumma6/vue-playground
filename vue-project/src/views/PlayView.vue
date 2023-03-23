<script lang="ts" setup>
import { ref, reactive } from 'vue'

const msg = ref('Heeej')

const c = ref('title')

const n = ref('num')

const toggle = ref(true)

const count = reactive({
  count: 0
})

const toggler = () => (toggle.value = !toggle.value)

const increment = () => count.count++

const decrement = () => count.count--

const d = () => console.log('input')
</script>

<template>
  <h1 :class="c">{{ msg }}</h1>
  <input v-model="msg" />
  <p :class="n">Count is {{ count.count }}</p>
  <button @click="increment">Add</button>
  <button @click="decrement">Sub</button>
  <h1 v-if="toggle">Yeeeey</h1>
  <h1 v-else>noooo</h1>
  <button @click="toggler">{{ toggle ? 'toooogle' : 'remove' }}</button>
</template>

<style>
.title {
  color: red;
}

.num {
  font-size: 30px;
}
</style>
