<script setup>
import Head from './components/Head.vue'
</script>

<template>
  <header class="head">
    <div class="wrapper">
      <Head msg="Login Page" />
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .head {
    height: 80px;
    width: 60vw;
  }
}
</style>
