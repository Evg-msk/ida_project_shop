<template>
  <div>
    <h1>Каталог</h1>
    <div>
      <div
        v-for="category of categories" :key="category.id"
      >
      </div>
<!--      <nuxt-link :to="`/category/${category.name}`">-->
<!--        <p>{{category.name}}</p>-->
<!--      </nuxt-link>-->
      <a href="#" @click.prevent="openCategory(category)">{{categories.name}}</a>
    </div>
  </div>
</template>

<script>
    export default {
        props: {
            categories: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data: () => ({

        }),

        async fetch({store}) {
            if (store.getters['products/categories'].length === 0) {
                await store.dispatch('products/fetchCategories')
            }
        },
        computed: {
            categories() {
                return this.$store.getters['products/categories']
            }
        },
        methods: {
            openCategory(category) {
                this.$router.push('/category/' + category)
            }
        },
    };
</script>

<style lang="sass" module>

</style>
