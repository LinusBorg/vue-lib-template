<template>
	<h1 class="text-green-600 text-3xl mb-3">{{ msg }}</h1>
	<button @click="count++">count is: {{ count }}</button>
	<p>
		Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
	</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
	msg: string
}>()
const count = ref(0)
</script>
