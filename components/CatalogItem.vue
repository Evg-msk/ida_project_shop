<template>
    <div :class="$style.catalog__item">
      <div :class="$style.header">
        <span :class="$style.rate"></span>
        <span
          :class="$style.cart"
          @click="addToCart"
        ></span>
        <span v-show="isVisible" :class="$style.addDescr">Товар добавлен в корзину!</span>
      </div>
      <div :class="$style.img"></div>
      <h1 :class="$style.title">{{bag_item.name}}</h1>
      <p :class="$style.price">{{bag_item.price}} ₽</p>
    </div>
</template>

<script>
    export default {
        props: {
            bag_item: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data: () => ({
          isVisible: false,
        }),
        methods: {
            addToCart() {
                this.$emit('addToCart', this.bag_item);
                this.isVisible = !this.isVisible;
                setTimeout(() => {
                        this.isVisible = !this.isVisible
                    }, 1000);
            },
        },
        components: {},
    };
</script>

<style lang="sass" module>
  .header
    display: flex
    justify-content: space-between
    vertical-align: baseline
  .rate
    position: relative
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
  .cart
    display: inline-block
    content: ""
    width: 12px
    height: 14px
    background: url("../assets/item_cart.svg") center (center/contain) no-repeat
    &:hover
      background: url("../assets/item_cart_hover.svg") center (center/contain) no-repeat
  .addDescr
    font-size: 16px
    border: 1px solid #7F828B
    border-radius: 6px
    background-color: #7F828B
    position: absolute
    top: 120px
    right: 40px
    color: #fff
  .catalog__item
    position: relative
    width: 264px
    min-height: 272px
    background: #FFFFFF
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05)
    border-radius: 8px
    padding: 17px 16px 16px 18px
    margin-bottom: 16px
    transition: all .1s linear
    border: 1px solid transparent
    &:hover
      transform: translateY(1.4px)
      box-shadow: 1px 1px 7px 3px rgba(#e1e1e1,0.5)
      border: 1px solid #e1e1e1
      cursor: pointer
  .img
    display: block
    margin: 0 auto
    width: 142px
    height: 180px
    background: url("../assets/bag.png") center (center/cover) no-repeat
  .title
    font-weight: 400
    font-size: 14px
    color: #59606D
    margin-top: 16px
  .price
    margin-top: 6px
    font-weight: bold
    font-size: 14px
    color: #1F1F1F
</style>
