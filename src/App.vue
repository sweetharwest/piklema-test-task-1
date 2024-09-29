<script setup lang="ts">
import TodoList from './components/TodoList.vue'
import AddTodo from "./components/AddTodo.vue";

</script>

<template>
    <div>
        <h1>To-Do List</h1>
        <AddTodo />
        <TodoList />
    </div>
</template>

<style scoped>
div {
    max-width: 800px;
    margin: 0 auto;
}

h1 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>
