<template>
    <button class="fajnyButton">
        <slot />
    </button>
</template>

<style scoped>
    .fajnyButton {
        background-color: hotpink;
        color: purple;
        min-width: 50 px;
        min-height: 30 px;
    }
</style>