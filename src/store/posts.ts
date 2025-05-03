import {defineStore} from "pinia";
import {ref} from "vue";

export interface PostInterface {
    id: number;
    title: string;
    content: string;
    userId: number;
}

export interface User {
    id: number;
    name: string;
}

export const usePostsStore = defineStore('postsData', () => {
    let posts = ref<PostInterface[]>([]);
    let users = ref<User[]>([]);

    const getPosts = async () => {
        try {
            const response = await fetch("https://my-json-server.typicode.com/TatianaChF/posts/posts");
            posts.value = await response.json() as PostInterface[];
        } catch (error) {
            console.error(error);
        }
    }

    const getUsers = async () => {
        try {
            const response = await fetch("https://my-json-server.typicode.com/TatianaChF/posts/users");
            users.value = await response.json() as User[];
        } catch (error) {
            console.error(error);
        }
    }

    return {posts, getPosts, users, getUsers}
})