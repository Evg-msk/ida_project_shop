<template>
    <div class="jackets">
        <h1> Jackets for You!!</h1>
      <ul>
        <li v-for="jacket of 5" :key="jacket">
          <a href="#">Jacket {{jacket}}</a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'jackets',
        data() {
            return {};
        },
        methods: {},
        components: {},
    };
</script>

<style lang="sass">
</style>
