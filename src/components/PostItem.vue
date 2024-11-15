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
  }
}
</script>

<template>
  <li class="item">{{ name }}</li>
</template>

<style>
.item {
  color: palevioletred;
  font-weight: bold;
  font-size: 18px;
}
</style>
