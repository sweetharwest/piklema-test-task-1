<script setup lang="ts">
import {ITodo} from "../interfaces/interfaces";
import {useTodoStore} from "../store/TodoStore.ts";

const todoStore = useTodoStore()

interface Props {
    todo: ITodo
    index: number
}

const props = defineProps<Props>()
</script>

<template>
    <li>
        <span>
            {{props.todo.title}}
        </span>
        <button @click="todoStore.deleteTodo(props.todo.id)">
            delete
        </button>
    </li>
</template>

<style scoped>

</style>