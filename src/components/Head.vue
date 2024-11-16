<template>
  <header class="header green">
    <h1>Login page</h1>
    <nav class="login">
      <RouterLink to="/posts">Posts</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10vh;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  padding: 0 20px;
}

.login {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.login > * {
  margin: 20px;
}
</style>
