<template>
    <div :class="$style.cart_item">
      <div :class="$style.wrapper">
        <div :class="$style.img"></div>
        <div :class="$style.info_wrap">
          <p :class="$style.title">{{cart_item_data.name}}</p>
          <p :class="$style.price">{{cart_item_data.price}} ₽</p>
          <span :class="$style.rate"></span>
        </div>
        <div :class="$style.quantity">
          <p>Кол-во</p>
          {{cart_item_data.quantity}}</div>
        <button
          :class="$style.delete"
          @click="deleteFromCart"
        ></button>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'cart_item',
        props: {
            cart_item_data: {
              type: Object,
              default() {
                  return {}
              }
            }
        },
        data() {
            return {};
        },
        methods: {
            deleteFromCart() {
                this.$emit('deleteFromCart')
            }
        },
        mounted() {
          this.$set(this.cart_item_data, 'quantity', 1)
        },
        components: {},
    };
</script>

<style lang="sass" module>
  .cart_item
    margin-top: 12px
    padding: 15px 16px 15px 25px
    width: 364px
    height: 120px
    background: #fff
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05)
    border-radius: 8px
  .img
    width: 70px
    height: 90px
    background: url("../assets/bag.png") center (center/cover) no-repeat
  .wrapper
    display: flex
    justify-content: space-between
    align-items: center
  .info_wrap
    display: flex
    flex-direction: column
    align-items: center
    margin-left: 34px
  .title
    font-family: PT Sans
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 18px
    color: #59606D
  .price
    font-family: PT Sans
    font-style: normal
    font-weight: bold
    font-size: 14px
    line-height: 18px
    color: #1F1F1F
    margin-top: 6px
  .delete
    display: inline-block
    content: ""
    width: 20px
    height: 22px
    border: none
    background: url("../assets/delete.svg") center (center/contain) no-repeat
    &:hover
      background: url("../assets/delete_hover.svg") center (center/contain) no-repeat
  .quantity
    font-size: 13px
    text-align: center
    color: #000
</style>
