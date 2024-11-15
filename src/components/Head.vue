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
  position: fixed; /* Fixes the header at the top of the page */
  top: 0; /* Aligns it to the top */
  left: 0; /* Aligns it to the left */
  right: 0; /* Aligns it to the right */
  height: 10vh; /* Sets height to 10% of the viewport height */
  background-color: #333; /* Header background color */
  display: flex; /* Flexbox for layout */
  align-items: center; /* Vertically centers content */
  justify-content: space-between; /* Distributes space between header elements */
  z-index: 1000; /* Ensures it stays above other content */
  padding: 0 20px; /* Adds some padding for aesthetics */
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
