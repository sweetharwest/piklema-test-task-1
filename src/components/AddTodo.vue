<script setup lang="ts">
import {useTodoStore} from "../store/TodoStore.ts";
import {ref} from "vue";

const todoStore = useTodoStore()
const title = ref<string>('')
const onSubmit = (title: string): void => {
    todoStore.addTodo(title)
}

</script>

<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Create</button>
    </form>
</template>

<style scoped>

</style>