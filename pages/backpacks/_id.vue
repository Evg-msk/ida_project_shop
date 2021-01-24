<template>
    <section>
      <h1>Bag {{$route.params.id}}</h1>
    </section>
</template>

<script>
    export default {
        validate({params}) {
            return /^\d+$/.test(params.id)
        },
        data() {
            return {};
        },
        methods: {},
        components: {},
    };
</script>

<style lang="sass">

</style>
