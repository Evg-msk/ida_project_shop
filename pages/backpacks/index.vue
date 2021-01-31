<template>
  <section :class="$style.backpacks">
    <CatalogItem
      :bag_item="bag"
      v-for="bag of bags" :key="bag.id"
      @click.prevent="openCard(bag)"
      @addToCart="addToCart"
    />

  </section>
</template>

<script>
  import { mapActions } from 'vuex'
  import CatalogItem from "../../components/CatalogItem";
    export default {
        name: 'Backpacks',
        async fetch({store}) {
            if (store.getters['products/bags'].length === 0) {
                await store.dispatch('products/fetchBags')
            }
        },

        data: () => ({

        }),
        computed: {
            bags() {
                return this.$store.getters['products/bags']
            },
            cart() {
                return this.$store.getters['products/cart']
            }
        },
        methods: {
            ...mapActions({
                addItemToCart: 'products/addItemToCart'
            }),
            openCard(bag) {
                this.$router.push('/backpacks/' + bag)
            },
            addToCart(data) {
                this.addItemToCart(data)
            },
        },
        components: {
            CatalogItem
        }
    };
</script>

<style lang="sass" module>
  .backpacks
    width: 1104px
    height: 915px
    overflow-y: hidden
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    align-items: center
</style>
