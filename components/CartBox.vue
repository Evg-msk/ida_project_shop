<template>
    <div :class="$style.cart">
      <div :class="$style.header">
        <h1 :class="$style.title">Корзина</h1>
        <nuxt-link no-prefetch to="/backpacks">
          <span :class="$style.close"></span>
        </nuxt-link>
      </div>
      <div v-if="!cart.length">
        <p :class="$style.description">Пока что вы ничего не добавили в корзину</p>
        <nuxt-link no-prefetch to="/backpacks">
          <button :class="$style.btn">Перейти к выбору</button>
        </nuxt-link>
      </div>

      <div v-if="cart.length > 0 && !isOrderDone">
        <p :class="$style.subtitle">Товары в корзине</p>
        <CartItem
          v-for="(item, index) in cart_data"
          :key="item.id"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
        />
        <h2 :class="$style.subtitle">Оформить заказ</h2>
        <form :class="$style.wrapper" action="" id="form" @submit.prevent="handleSubmit">
          <input
            :class="$style.form_item"
            type="text"
            placeholder="Ваше имя"
            v-model="userName">
          <input
            :class="$style.form_item"
            type="tel"
            v-mask="'+7 (###) ###-##-##'"
            placeholder="Телефон"
            v-model="phoneNumber"
          >
          <input
            :class="$style.form_item"
            type="text"
            placeholder="Адрес"
            v-model="address">
          <button
            :class="$style.btn"
            id="btn_sbm">Отправить
          </button>
        </form>
        <ul :class="$style.err" v-show="errors.length > 0">
            <li v-for="(error, index) in errors" :key="index">{{error}}</li>
        </ul>
      </div>
      <div id="req" v-show="isOrderDone">
        <div :class="$style.img_ok"></div>
        <h3 :class="$style.title_small">Заявка успешно отправлена</h3>
        <p :class="$style.description_callback">Вскоре наш менеджер свяжется с Вами</p>
      </div>
    </div>
</template>

<script>
  import CartItem from "./CartItem";
  import {mapActions} from 'vuex';
  import axios from "../.nuxt/axios";

    export default {
        name: 'CartBox',
        props: {
          cart_data: {
              type: Array,
              default() {
                  return []
              }
          }
        },
        data() {
            return {
                isOrderDone: false,
                inputPhoneModel: '',
                phoneNumber: '',
                address: '',
                userName: '',
                items: '',
                errors: []
            };
        },
        methods: {
            ...mapActions({
                deleteItemFromCart: 'products/deleteItemFromCart'
            }),
            deleteFromCart(index) {
                this.deleteItemFromCart(index)
            },
            async handleSubmit() {
                this.errors = [];
                if(!this.userName) {
                    this.errors.push('Введиете Ваше имя');
                }
                if(!this.phoneNumber) {
                    this.errors.push('Веедите номер телефона');
                }
                if(!this.address) {
                    this.errors.push('Адрес не может быть пустым!');
                }
                if(!this.userName || !this.phoneNumber || !this.address) {
                    document.getElementById('btn_sbm').disabed = true
                } else {
                    const res = await this.$axios.$post('https://jsonplaceholder.typicode.com/posts', {
                        userName: this.userName,
                        phone: this.phoneNumber,
                        address: this.address,
                        items: this.cart_data
                    });
                    console.log(res);
                    this.isOrderDone = true;
                }
            }
        },
        components: {
            CartItem
        },
        computed: {
            cart() {
                return this.$store.getters['products/cart']
            }
        }
    };
</script>

<style lang="sass" module>
  .cart
    transition: .2s ease-in
    width: 460px
    height: 1077px
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05)
    border-radius: 8px 0 0 8px
    padding: 52px 48px 0 48px
    z-index: 99999
  .title
    font-weight: 700
    font-size: 32px
    line-height: 41px
    color: #000000
  .subtitle
    font-weight: 400
    font-size: 18px
    line-height: 23px
    color: #59606D
    margin-top: 32px
  .description
    font-weight: 400
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
    font-weight: 400
    font-size: 16px
    line-height: 21px
    text-align: center
    color: #FFFFFF
    cursor: pointer
  .header
    display: flex
    justify-content: space-between
    align-items: center
  .wrapper
    display: flex
    flex-direction: column
    align-items: flex-start
  .form_item
    width: 364px
    height: 50px
    background: #F8F8F8
    border-radius: 8px
    margin-top: 16px
    border: none
    outline: none
    padding: 14px 0 14px 14px
    color: #959DAD
    font-size: 16px
    &:focus
      color: #000
  .title_small
    font-weight: 700
    font-size: 24px
    text-align: center
    color: #000
    margin-top: 24px
  .description_callback
    font-weight: 400
    font-size: 16px
    line-height: 21px
    text-align: center
    color: #59606D
  .img_ok
    margin: 300px auto 0 auto
    width: 80px
    height: 80px
    background: url("../assets/hand_ok.png") center (center/cover)
  .close
    display: block
    width: 14px
    height: 14px
    transition: .2s all
    background: url("../assets/close.png") center (center/cover)
    cursor: pointer
    &:hover
      filter: drop-shadow(2px 2px 4px #000)
  .err
    margin: 10px 0
    border: 1px solid red
    background: rgba(255, 0, 0, 0.4)
    list-style: none
    padding: 10px 10px
    text-align: center
    border-radius: 8px
</style>
