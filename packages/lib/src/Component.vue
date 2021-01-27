<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: '',
  props: {
    message: { type: String, required: true },
  },
  emits: ['messageChanged'],
  setup() {},
})
</script>
<template>
  <h1>This is your component!</h1>
  <div>
    <p>With some content</p>
  </div>
</template>
<style lang="postcss"></style>
