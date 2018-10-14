<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
         <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
          <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
          <router-link to="/sells">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from './components/header/header.vue'
// import goods from './components/goods/goods'
// import ratings from './components/ratings/ratings'
// import sells from './components/sells/sells'

export default{
  components: {
    'v-header': header
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .tab
      display:flex
      width:100%
      height 40px
      line-height:40px
      .tab-item
        flex:1
        text-align:center

</style>
