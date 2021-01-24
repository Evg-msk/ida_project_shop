<template>
    <nav :class="$style.nav">
      <ul :class="$style.products">
        <li :class="$style.item">
          <nuxt-link no-prefetch :active-class="$style.active" :class="$style.link" to="/backpacks">
            Рюкзаки
          </nuxt-link>
        </li>
        <li :class="$style.item">
          <nuxt-link :active-class="$style.active" :class="$style.link" to="/t-shirts">
            Футболки
          </nuxt-link>
        </li>
        <li :class="$style.item">
          <nuxt-link :active-class="$style.active" :class="$style.link" to="/jackets">
            Рубашки
          </nuxt-link>
        </li>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: 'catalog',
        data() {
            return {};
        },
        methods: {},
        components: {},
    };
</script>

<style lang="sass" module>
  .nav
    margin-top: 24px
  .products
    margin: 0
    list-style: none
  .item
    margin-top: 16px
  .link
    color: #959DAD
    margin-top: 16px
    &:hover
      color: #1f1f1f
  .active
    color: #1f1f1f
</style>
