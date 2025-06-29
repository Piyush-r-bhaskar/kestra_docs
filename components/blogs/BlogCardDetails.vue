<template>
    <p>{{ authorNames }} - {{ timesAgo(date) }}</p>
</template>

<script setup>
import { timesAgo } from "~/utils/times.js"

const props = defineProps({
    authors: {
        type: Array,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

const authorNames = computed(() => {
    if (!props.authors?.length) return ''
    return props.authors
        .map(author => author?.name)
        .filter(Boolean)
        .join(', ')
})
</script>


<style lang="scss" scoped>
    @import "../../assets/styles/variable";

    p {
        color: $black-8;
        font-size: $font-size-sm;
        font-weight: 400;
    }
</style>