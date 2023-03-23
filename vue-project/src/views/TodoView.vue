<script setup lang="ts">
import { ref, computed } from 'vue'

const hideCompleted = ref(false)

const newTodo = ref('')
let id = 0
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

const addTodo = () => {
  todos.value = [
    ...todos.value,
    {
      text: newTodo.value,
      id: id++,
      done: false
    }
  ]
  newTodo.value = ''
}

const removeTodo = (todo: any) => {
  todos.value = todos.value.filter((d) => d.text !== todo)
}

const filteredTodos = computed(() => {
  console.log('hej')
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value
})
</script>

<template>
  <h1>Todos</h1>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button>Add todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      {{ todo }}
      <button @click="removeTodo(todo.text)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">Hide completed</button>
</template>
