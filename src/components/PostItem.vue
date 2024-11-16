<template>
  <li class="item">
    {{ name }}
    <form @submit.prevent="deleteItem">
      <input class="button button-24" type="submit" value="Delete" />
    </form>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    async deleteItem() {
      try {
        const JWT = localStorage.getItem('token')
        const response = await fetch(`http://localhost:8080/posts/${this.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JWT}`
          }
        })

        if (response.ok) {
          alert(`Post with ID ${this.id} deleted successfully!`)
          this.$emit('deleted', this.id)
        } else {
          const error = await response.text()
          alert(`Failed to delete post: ${error}`)
        }
      } catch (error) {
        console.error('Error deleting post:', error)
        alert('An error occurred while deleting the post.')
      }
    }
  }
}
</script>

<style>
.item {
  color: palevioletred;
  font-weight: bold;
  font-size: 18px;
  list-style: none;
  display: flex;
  align-items: center;
}
form {
  padding-left: 10px;
}

.button-24 {
  background: #ff4742;
  border: 1px solid #ff4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, 'proxima nova', sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 20px;
  outline: 0;
  padding: 7px 5px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
}

.button-24:hover,
.button-24:active {
  background-color: initial;
  background-position: 0 0;
  color: #ff4742;
}

.button-24:active {
  opacity: 0.5;
}
</style>
