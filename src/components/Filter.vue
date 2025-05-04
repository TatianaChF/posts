<template>
  <div class="search-component mb-4">
    <div class="input-group">
      <span class="input-group-text">
        <i class="bi bi-search"></i>
      </span>
      <input
          type="text"
          class="form-control"
          placeholder="Search posts..."
          aria-label="Search posts"
          v-model="searchQuery"
      >
      <button
          class="btn btn-outline-secondary"
          type="button"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import {usePostsStore} from "../store/posts.ts";

let searchQuery = ref<string>('');
const postsStore = usePostsStore();

watch(searchQuery, () => {
  postsStore.filtrationPosts(searchQuery.value.toLowerCase());
})
</script>