<template>
  <div class="header">
    <div class="conten-wrapper">
      <div class="avatar">
        <img width="64px" height="64px" :src="seller.avatar" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <!-- 优惠（supports）有可能没有，需要判断; 用v-if判断有supports时才显示 -->
        <div v-if="seller.supports" class="supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span
      ><span class="bulletin-text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Header',
  props: {
    seller: {
      type: Object
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"

.header
  color #fff
  background #999
  .conten-wrapper
    position relative
    padding 24px 12px 18px 24px
    font-size 0 //两个span挨着时没有空白间隙：父元素设为0，子元素设置具体像素。
    .avatar
      display inline-block
      vertical-align top
      img
        border-radius 2px
    .content
      display inline-block
      margin-left 16px
      .title
        margin 2px 0 8px 0
        .brand
          display inline-block // 行内元素宽高没用，所以需要变成block
          vertical-align top // 对齐方式：顶部对齐；了解基线相关知识
          width 30px
          height 18px
          bg-image('brand')
          background-size 30px 18px
          background-repeat no-repeat
        .name
          margin-left 6px
          font-size 16px
          line-height 18px
          font-weight bold
      .description
        margin-bottom 10px
        line-height 12px
        font-size 12px
      // supports的“减”和“折”需要对应不同图标
      .supports
        .icon
          display inline-block
          vertical-align top
          width 12px
          height 12px
          margin-right 4px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.guarantee
            bg-image('guarantee_1')
          &.invoice
            bg-image('invoice_1')
          &.special
            bg-image('special_1')
        .text
          line-height 12px
          font-size 10px
    .support-count
      position absolute
      right 12px
      bottom 14px
      padding 0 8px
      height 24px
      line-height 24px
      border-radius 14px
      background rgba(0, 0, 0, 0.2)
      text-align center
      .count
        font-size 10px
      .icon-keyboard_arrow_right
        margin-left 2px
        line-height 24px
        font-size 10px
  .bulletin-wrapper
    position relative
    height 28px
    line-height 28px
    padding 0 22px 0 12px
    white-space nowrap // 不换行
    overflow hidden // 溢出时隐藏
    text-overflow ellipsis // 结合上诉两个属性使用，可实现文本溢出显示...
    // font-size 0 这样设置会影响省略号显示，但是又想两个span没有空白间隙，可以使用在两个span之间不换行来实现
    background rgba(7, 17, 27, 0.2)
    .bulletin-title
      display inline-block
      vertical-align top
      margin-top 7px // 图标和文字顶部对齐 (28 - 12)/2 = 7 28: parent height 12: self height
      width 22px
      height 12px
      bg-image('bulletin')
      background-size 22px 12px
      background-repeat no-repeat
    .bulletin-text
      vertical-align top
      margin 0 4px
      font-size 10px
    .icon-keyboard_arrow_right
      position absolute
      font-size 10px
      right 12px
      top 8px
</style>
