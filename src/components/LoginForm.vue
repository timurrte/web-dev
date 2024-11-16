<template>
  <div class="greetings form">
    <h1 class="green">Login</h1>

    <form v-if="!isLoggedIn" class="login-form" @submit.prevent="handleSubmit">
      <label for="login">Login</label>
      <input v-model="login" type="text" name="login" id="login" required />
      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" id="password" required />
      <input class="button" type="submit" value="Log in" />
    </form>

    <p v-if="isLoggedIn" class="success-message">You have successfully logged in!</p>
    <p v-if="message" class="message">{{ message }}</p>
    <p v-if="token" class="token">JWT: {{ token }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      login: '',
      password: '',
      message: '',
      token: '',
      isLoggedIn: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('http://localhost:8012/authorization', {
          login: this.login,
          password: this.password
        })
        console.log(response.data)
        localStorage.setItem('token', response.data)

        this.token = response.data
        this.isLoggedIn = true
      } catch (error) {
        alert(error)
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

.token {
  color: rgb(209, 77, 205);
}

.button {
  margin: 15px 0px;
}

.success-message {
  color: green;
  font-weight: bold;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
