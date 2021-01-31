<template>
        <CartBox
          :cart_data="cart"
        />
</template>

<script>
    import CartBox from "../components/CartBox";
    export default {
        name: 'cart',
        layout: 'empty',
        data() {
            return {};
        },
        computed: {
            cart() {
                return this.$store.getters['products/cart']
            }
        },
        components: {CartBox},
    };
</script>
