<template>
  <div>
    <p>{{props.postData.title}}</p>
    <p>{{props.postData.content}}</p>
    <p>{{props.postData.author}}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["postData"]);
</script>