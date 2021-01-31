<template>
    <div :class="$style.empty">
        <Nuxt/>
    </div>
</template>

<script>
    export default {
        name: 'empty',
        methods: {},
        components: {},
    };
</script>

<style lang="sass" module>
    .empty
      display: flex
      justify-content: flex-end
      align-items: flex-end
      margin: 10px 5px
</style>
