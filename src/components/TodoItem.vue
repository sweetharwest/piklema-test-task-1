<script setup lang="ts">
import {ITodo} from "../interfaces/interfaces";
import {useTodoStore} from "../store/TodoStore.ts";
import {ref} from "vue";

interface Props {
    todo: ITodo
    index: number
}

const props = defineProps<Props>()

const todoStore = useTodoStore()

const isEditing = ref(false)
const editTitle = ref(props.todo.title)
const startEdit = () => {
    isEditing.value = true
    editTitle.value = props.todo.title
}

const saveEdit = () => {
    if (editTitle.value.trim()) {
        todoStore.setTitle(props.todo.id, editTitle.value)
        isEditing.value = false
    }
}

const cancelEdit = () => {
    isEditing.value = false;
    editTitle.value = props.todo.title;
};

const toggleCompletion = () => {
    props.todo.completed = !props.todo.completed;
};

const deleteTodo = () => {
    todoStore.deleteTodo(props.todo.id);
};
</script>

<template>
    <li>
        <div v-if="!isEditing" class="todoItemContainer">
            <div>
                <input
                    type="checkbox"
                    v-bind:checked="todo.completed"
                    v-on:change="toggleCompletion"
                >
                <span
                    @click="startEdit"
                    v-bind:class="{done: todo.completed}">
                        {{props.todo.title}}
                </span>
            </div>

            <button @click="deleteTodo">Delete</button>
        </div>
        <div v-else class="todoItemContainer">
            <input
                class="edit"
                type="text"
                v-model="editTitle"
                @keyup.enter="saveEdit"
                @blur="cancelEdit"
            >
            <div>
                <button @click="saveEdit">Save</button>
                <button @click="cancelEdit">Cancel</button>
            </div>
        </div>
    </li>
</template>

<style scoped>

.edit {
    width: calc(100% - 230px);
    padding-left: 20px;
    font-size: 18px;
    border-radius: 5px;
}

.todoItemContainer {
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
    height: 30px;
}

button {
    background-color: rgba(51, 51, 51, 0.05);
    border-radius: 8px;
    border-width: 0;
    color: #333333;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    padding: 6px 12px;
    text-align: center;
    margin-left: 30px;
}

span {
    line-height: 30px;
    font-size: 18px;
}

input {
    margin-right: 1rem;
}

.done {
    text-decoration: line-through;
}
</style>