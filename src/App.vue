<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><strong>MR BLOG</strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto fw-bold">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">হোম</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/library">লাইব্রেরি</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/history">ইতিহাস</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/sports">খেলাধুলা</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/bangladesh">বাংলাদেশ</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/world">বিশ্ব</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/science">বিজ্ঞান</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>



  <RouterView />
</template>

<style scoped>

</style>
