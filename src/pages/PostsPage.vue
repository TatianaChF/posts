<template>
  <div class="posts-grid row">
    <div
        v-for="post in postsStore.filteredPosts"
        :key="post.id"
        class="col-12 col-md-6 col-lg-4">
      <Post :postData="post" />
    </div>
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
  postsStore.getUsers();
  postsStore.getPosts();
})
</script>