<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import {useTodoStore} from "../store/TodoStore.ts";

const todoStore = useTodoStore()

</script>

<template>
    <div>
        <ul>
            <TodoItem
                v-for="(todo, i) of todoStore.todos"
                :todo="todo"
                :index="i"
                />
        </ul>
    </div>
</template>

<style scoped>

</style>