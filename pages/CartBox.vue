<template>
    <div :class="$style.cart">
      <div :class="$style.header">
        <h1 :class="$style.title">Корзина</h1>
        <span :class="$style.close">X</span>
      </div>
      <p :class="$style.description">Пока что вы ничего не добавили в корзину</p>
      <button :class="$style.btn">Перейти к выбору</button>
      <CartItem
        v-for="(item, index) in cart_data"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
      />
    </div>
</template>

<script>
  import CartItem from "../components/CartItem";
  import {mapActions} from 'vuex';
    export default {
        props: {
          cart_data: {
              type: Array,
              default() {
                  return []
              }
          }
        },
        data() {
            return {};
        },
        methods: {
            ...mapActions({
                deleteItemFromCart: 'products/deleteItemFromCart',
            }),
            deleteFromCart(index) {
                this.deleteItemFromCart(index)
            }
        },
        components: {
            CartItem
        },
    };
</script>

<style lang="sass" module>
  .cart
    width: 460px
    height: 1077px
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05)
    border-radius: 8px 0 0 8px
    padding: 52px 48px 0 48px
  .title
    font-family: PT Sans
    font-style: normal
    font-weight: bold
    font-size: 32px
    line-height: 41px
    color: #000000
  .description
    font-family: PT Sans
    font-style: normal
    font-weight: normal
    font-size: 22px
    line-height: 28px
    color: #000000
    margin-top: 24px
  .btn
    width: 364px
    height: 50px
    background: #1F1F1F
    border-radius: 8px
    margin-top: 24px
    font-family: PT Sans
    font-style: normal
    font-weight: normal
    font-size: 16px
    line-height: 21px
    text-align: center
    color: #FFFFFF
  .header
    display: flex
    justify-content: space-between
    align-items: center
</style>
