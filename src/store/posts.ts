import {defineStore} from "pinia";
import {ref} from "vue";

export interface PostInterface {
    id: number;
    title: string;
    content: string;
    userId: number;
}

export const usePostsStore = defineStore('postsData', () => {
    let posts = ref<PostInterface[]>([]);

    const getPosts = async () => {
        try {
            const response = await fetch("https://my-json-server.typicode.com/TatianaChF/posts/posts");
            posts.value = await response.json() as PostInterface[];
        } catch (error) {
            console.error(error);
        }
    }

    return {posts, getPosts}
})