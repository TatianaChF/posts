<template>
  <div class="search-box">
    <div class="input-group">
      <span class="input-icon">
        <svg class="search-icon" viewBox="0 0 24 24" width="24" height="24">
          <path d="M10 2.5a7.5 7.5 0 0 1 5.964 12.096l5.17 5.17a1 1 0 0 1-1.414 1.414l-5.17-5.17A7.5 7.5 0 1 1 10 2.5zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/>
        </svg>
      </span>
      <input
          type="text"
          class="search-input"
          placeholder="Search posts..."
          v-model="searchQuery"
      />
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