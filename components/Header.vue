<template>
    <div :class="$style.header">
      <img :class="$style.logo" src="../assets/TestList.png">
      <nuxt-link to="/cart">
        <div :class="$style.cart_box">
          <span :class="$style.quantity">{{cart.length}}</span>
        </div>
      </nuxt-link>


    </div>
</template>

<script>
    export default {
        components: {},
        props: {},
        name: 'Header',
        data: () => ({
        }),
        computed: {
            cart() {
                return this.$store.getters['products/cart']
            }
        },
        methods: {
        },
    };
</script>

<style lang="sass" module>
  .header
    display: flex
    justify-content: space-between
    align-items: center
    padding: 20px 108px 20px 88px
    height: 66px
    background-color: #FFF
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05)
    border-radius: 0 0 8px 8px
  .cart_box
    position: relative
    width: 25px
    height: 27px
    background: url("../assets/Vector.svg") center (center/cover) no-repeat
    cursor: pointer
    &:hover
      filter: drop-shadow(1px 0 2px rgba(157, 157, 157, 0.7))
  .quantity
    display: block
    position: absolute
    top: -4px
    font-size: 8px
    text-align: center
    right: -6px
    padding-top: 1px
    content: ''
    width: 12px
    height: 12px
    color: #fff
    background: #959DAD
    border-radius: 50%
    &:hover
      cursor: pointer
</style>
