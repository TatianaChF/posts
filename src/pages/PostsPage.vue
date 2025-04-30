<template>
  <div v-for="post in postsStore.posts" :key="post.id">
    <p>{{post.title}}</p>
  </div>
</template>

<script setup lang="ts">
import {onBeforeMount} from "vue";
import {usePostsStore} from "../store/posts.ts";

const postsStore = usePostsStore();

onBeforeMount(() => {
  postsStore.getPosts();
})
</script>