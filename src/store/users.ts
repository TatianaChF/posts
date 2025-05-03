import {defineStore} from "pinia";
import {ref} from "vue";

export interface User {
    id: number;
    name: string;
}

export const useUsersStore = defineStore('usersData', () => {
    let users = ref<User[]>([]);

    const getUsers = async () => {
        try {
            const response = await fetch("https://my-json-server.typicode.com/TatianaChF/posts/users");
            users.value = await response.json() as User[];
        } catch (error) {
            console.error(error);
        }
    }

    return {users, getUsers}
})