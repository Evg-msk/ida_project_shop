<template>
  <div>
    <h2 :class="$style.title"> Добро пожаловать в каталог! <br> Выберите пожалуйста слева категорию товаров  для отображения.</h2>
  </div>
</template>

<script>

export default {
    components: {
    },
    computed: {
    },
}
</script>

<style lang="sass" module>
  .title
    position: absolute
    left: 25%
    text-align: center
    line-height: 45px
</style>
