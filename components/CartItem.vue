<template>
    <div :class="$style.cart_item">
      <div :class="$style.wrapper">
        <div :class="$style.img"></div>
        <div :class="$style.info_wrap">
          <p :class="$style.title">{{cart_item_data.name}}</p>
          <p :class="$style.price">{{cart_item_data.price}} ₽</p>
          <span :class="$style.rate"></span>
        </div>
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
    margin-left: 34px
    text-align: left
  .title
    font-weight: 400
    font-size: 14px
    line-height: 18px
    color: #59606D
  .price
    font-weight: 700
    font-size: 14px
    line-height: 18px
    color: #1F1F1F
    margin-top: 6px
  .rate
    position: relative
    margin-top: 19px
    font-weight: 700
    font-size: 10px
    color: #F2C94C
    &::before
      position: absolute
      top: 0
      display: inline-block
      content: ""
      width: 17px
      height: 17px
      background: url("../assets/rate_star.svg") center (center/cover) no-repeat
      margin-right: 4px
    &::after
      position: absolute
      top: 2px
      left: 18px
      display: inline-block
      content: "4.5"
  .delete
    display: inline-block
    content: ""
    width: 20px
    height: 22px
    border: none
    background: url("../assets/delete.svg") center (center/contain) no-repeat
    outline: none
    &:hover
      background: url("../assets/delete_hover.svg") center (center/contain) no-repeat
</style>
