<script setup lang="ts">
import {useTodoStore} from "../store/TodoStore.ts";
import {ref} from "vue";

const todoStore = useTodoStore()
const title = ref<string>('')
const onSubmit = (): void => {
    if (title.value.trim()) {
        todoStore.addTodo(title.value)
    }
    title.value = '';
}

</script>

<template>
    <form @submit.prevent="onSubmit">
        <input
            type="text"
            placeholder="Enter todo"
            v-model="title">
        <button type="submit">Add</button>
    </form>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
}

input {
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    width: 400px;
}

button {
    background-color: rgba(51, 51, 51, 0.05);
    border-radius: 8px;
    border-width: 0;
    color: #333333;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 12px;
    text-align: center;
}
</style>