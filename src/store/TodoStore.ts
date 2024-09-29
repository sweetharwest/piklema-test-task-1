import {defineStore} from "pinia";
import {ref, watch} from "vue";
import {ITodo} from "../interfaces/interfaces.ts";

export const useTodoStore = defineStore('todoStore', () => {
    /*const todos = ref<ITodo[]>([
        { id: 1, title: 'Buy groceries', completed: false },
        { id: 2, title: 'Finish project', completed: true },
        { id: 3, title: 'Walk the dog', completed: false }
    ])*/
    const todos = ref<ITodo[]>([])

    const todosInLocalStorage = localStorage.getItem("todos")
    if (todosInLocalStorage) {
        todos.value = JSON.parse(todosInLocalStorage);
    }

    const addTodo = (title: string): void => {
        todos.value.push({ id: Date.now(), title: title, completed: false })
    }

    const toggleCompleted = (id: number): void => {
        const idx = todos.value.findIndex((el) => el.id === id)
        todos.value[idx].completed = !todos.value[idx].completed
    }

    const deleteTodo = (id: number): void => {
        todos.value = todos.value.filter((el) => el.id !== id)
    }

    const setTitle = (id: number, title: string): void => {
        const idx = todos.value.findIndex((el) => el.id === id)
        todos.value[idx].title = title
    }

    watch(
        () => todos.value,
        (state: ITodo[]) => {
            localStorage.setItem("todos", JSON.stringify(state));
        },
        { deep: true }
    );

    return {
        todos, toggleCompleted, deleteTodo, setTitle, addTodo
    }
})