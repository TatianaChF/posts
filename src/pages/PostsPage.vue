<template>
  <div v-for="post in postsStore.posts" :key="post.id">
    <Post :postData="post" />
  </div>
</template>

<script setup lang="ts">
import {onBeforeMount} from "vue";
import {usePostsStore} from "../store/posts.ts";
import Post from "../components/Post.vue";

const postsStore = usePostsStore();

defineProps({
  postData: Object
})

onBeforeMount(() => {
  postsStore.getPosts();
})
</script>