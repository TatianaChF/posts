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

<script setup lang="ts"></script>