<template>
  <div class="greetings form">
    <h1 class="green">Register</h1>
    <form @submit.prevent="handleSubmit">
      <label for="login">Login</label>
      <input v-model="login" type="text" name="login" id="login" required />
      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" id="password" required />
      <input class="submit" type="submit" value="Sign up" />
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      login: '',
      password: '',
      message: ''
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('http://localhost:8012/register', {
          login: this.login,
          password: this.password
        })
        this.message = response.data.message
      } catch (error) {
        this.message =
          'An error occurred: ' + (error.response ? error.response.data.message : error.message)
      }
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.form form {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.submit {
  margin-top: 10px;
}
</style>
