<template>
  <div>
    <Header/>
      <main>
        <div :class="$style.container">
          <div :class="$style.header">
            <h1 :class="$style.title">Каталог</h1>
            <div :class="$style.filter_description">
              Сортировать по:
              <div :class="$style.select">
                <select :class="$style.filter_select">
                  <option> цене</option>
                  <option> популярности</option>
                </select>
              </div>
            </div>
          </div>
          <div :class="$style.wrapper">
            <Catalog/>
            <Nuxt />
          </div>
        </div>
      </main>
  </div>
</template>

<script>
  import Header from "../components/Header";
  import Catalog from "../components/Catalog";
  export default {
      components: {
          Catalog,
          Header
      }
  }
</script>

<style lang="sass" module>
  *
    box-sizing: border-box
    margin: 0
    padding: 0
  .container
    padding: 32px 88px 66px 88px
  .header
    display: flex
    justify-content: space-between
    align-items: center
  .filter_description
    display: flex
    align-items: center
    height: 21px
    font-family: PT Sans
    font-style: normal
    font-weight: normal
    font-size: 16px
    color: #1F1F1F
  .select
    position: relative
    margin-left: 6px
    &:after
      content: ""
      display: block
      position: absolute
      top: 50%
      margin-top: -2px
      right: 47%
      width: 1px
      height: 1px
      z-index: 1
      border-style: solid
      border-width: 6px 5px 0 5px
      border-color: #59606D transparent transparent transparent
      pointer-events: none
  .filter_select
    background: none
    border: 0
    -webkit-appearance: none
    appearance: none
    font-family: PT Sans
    font-style: normal
    font-weight: normal
    font-size: 16px
    color: #59606D
    &:focus
      border: none
      outline: none
  .wrapper
    display: flex
    justify-content: space-between
    align-items: baseline
    margin-top: 10px
    position: relative
</style>
