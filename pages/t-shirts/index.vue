<template>
    <div class="t-shirts">
      <h1> T-shirts for You!</h1>
      <ul>
        <li v-for="shirt of 5" :key="shirt">
          <a href="#">T-shirt {{shirt}}</a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'T-shirts',
        data() {
            return {};
        },
        methods: {},
        components: {},
    };
</script>

<style lang="sass">

</style>
