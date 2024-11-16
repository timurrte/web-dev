<script setup>
import { ref, onMounted } from 'vue'
import PostItem from './PostItem.vue'

const posts = ref([])
const message = ref('')

const fetchPosts = async () => {
  try {
    const JWT = localStorage.getItem('token')

    const apiUrl = 'http://localhost:8080/posts'
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JWT}`
      }
    }

    const response = await fetch(apiUrl, requestOptions)
    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('Недостатньо прав для доступу до ресурсу.')
      } else if (response.status === 401) {
        throw new Error('Спочатку потрібно авторизуватись.')
      } else {
        throw new Error('Network response was not ok')
      }
    }

    const data = await response.json()
    posts.value = data
  } catch (error) {
    console.error('Error loading posts:', error)
    message.value = `An error occurred: ${error.message}`
  }
}

// Fetch posts on component mount
onMounted(fetchPosts)

// Function to remove the post from the list when deleted
const removePost = (id) => {
  posts.value = posts.value.filter((post) => post.id !== id)
}
</script>

<template>
  <div class="posts">
    <h1 class="green">Posts</h1>
    <p v-if="message" class="message">{{ message }}</p>
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :name="post.postName"
      @deleted="removePost"
    />
  </div>
</template>

<style>
.posts {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.green {
  color: green;
}

.message {
  color: red;
  font-weight: bold;
}
</style>
