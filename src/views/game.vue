<template>
    <div>
        <h1>game</h1>
        <pre>slug: {{ slug }}</pre>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const slug = computed(() => route.params.slug);
</script>