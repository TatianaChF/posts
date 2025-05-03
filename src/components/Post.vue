<template>
  <div class="post-card card h-100">
    <div class="card-body position-relative">
      <h5 class="card-title">{{props.postData.title}}</h5>
      <p class="card-text">{{props.postData.content}}</p>
      <p>{{props.postData.author}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["postData"]);
</script>