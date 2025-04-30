import {defineStore} from "pinia";
import {ref} from "vue";

export interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
}

export const usePostsStore = defineStore('postsData', () => {
    let posts = ref<Post[]>([]);

    const getPosts = async () => {
        try {
            const response = await fetch("https://my-json-server.typicode.com/TatianaChF/posts/posts");
            posts.value = await response.json() as Post[];

            console.log(posts.value)
        } catch (error) {
            console.error(error);
        }
    }

    return {posts, getPosts}
})