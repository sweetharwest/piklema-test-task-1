<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import {useTodoStore} from "../store/TodoStore.ts";

const todoStore = useTodoStore()

</script>

<template>
    <div v-if="todoStore.todos.length > 0">
        <ul>
            <TodoItem
                v-for="(todo, i) of todoStore.todos"
                :todo="todo"
                :index="i"
                />
        </ul>
    </div>
    <div v-else>
        <h3>The To-Do list is empty. Add an To-Do</h3>
    </div>
</template>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

h3 {
    text-align: center;
}
</style>