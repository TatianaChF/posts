import {defineStore} from "pinia";
import {ref} from "vue";

export interface PostInterface {
    id: number;
    title: string;
    content: string;
    userId: number;
    userName?: string;
}

export interface User {
    id: number;
    name: string;
}

export const usePostsStore = defineStore('postsData', () => {
    let posts = ref<PostInterface[]>([]);
    let filteredPosts = ref<PostInterface[]>([]);
    let users = ref<User[]>([]);

    const getPosts = async () => {
        try {
            const response = await fetch("https://my-json-server.typicode.com/TatianaChF/posts/posts");
            posts.value = await response.json() as PostInterface[];
            filteredPosts.value = posts.value;
            getUserName();
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

    const getUserName = () => {
        for (let i = 0; i < posts.value.length; i++) {
            const user
                = users.value.find((user) => user.id === posts.value[i].userId);
            if (user) {
                posts.value[i].userName = user.name;
            } else {
                posts.value[i].userName = "";
            }
        }
    }

    const filtrationPosts = (user: string) => {
        filteredPosts.value = posts.value.filter((post) => {
            if (post.userName) {
                return post.userName.toLowerCase().includes(user);
            } else return posts.value
        })
    }

    return {posts, getPosts, users,
        getUsers, getUserName, filtrationPosts,
        filteredPosts}
})