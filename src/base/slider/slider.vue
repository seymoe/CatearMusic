<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span v-for="(item, index) in dots" :key="index" :class="{active: currentIndex === index}"></span>
    </div>
  </div>
</template>

<script>
  import {addClass} from 'common/js/dom'
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        dots: [],
        currentIndex: 0
      }
    },
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 3000
      }
    },
    mounted() {
      setTimeout(() => {
        this._setSliderWidth()
        this._initDots()
        this._initSlider()
        if (this.autoPlay) {
          this._play()
        }
      }, 20)
      window.addEventListener('resize', () => {
        if (!this.slider) {
          return
        }
        this._initSlider(true)
        this.slider.refresh()
      })
    },
    destroyed() {
      clearTimeout(this.timer)
    },
    methods: {
      _setSliderWidth(isResize) {
        this.children = this.$refs.sliderGroup.children

        let width = 0
        let sliderWidth = this.$refs.slider.clientWidth
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          addClass(child, 'slider-item')
          child.style.width = sliderWidth + 'px'
          width += sliderWidth
        }

        if (this.loop && !isResize) {
          width += 2 * sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      _initDots() {
        this.dots = new Array(this.children.length)
      },
      _initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: {
            loop: this.loop,
            threshold: 0.3,
            speed: 400
          }
        })

        // 监听滚动事件链接点和轮播图
        this.slider.on('scrollEnd', () => {
          let pageIndex = this.slider.getCurrentPage().pageX
          if (this.loop) {
            pageIndex -= 1
          }
          this.currentIndex = pageIndex

          if (this.autoPlay) {
            clearTimeout(this.timer)
            this._play()
          }
        })
      },
      _play() {
        let pageIndex = this.currentIndex + 1
        if (this.loop) {
          pageIndex += 1
        }
        this.timer = setTimeout(() => {
          this.slider.goToPage(pageIndex, 0, 400)
        }, this.interval)
      }
    }
  }
</script>

<style scoped>
  .slider{
    position: relative;
    min-height: 1px;
    overflow: hidden;
  }
  .slider-group{
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  }
  .slider-group .slider-item{
    float: left;
    box-sizing: border-box;
    overflow: hidden;
    text-align: center;
  }
  .slider-item a{
    display: block;
    width: 100%;
    overflow: hidden;
    text-decoration: none;
  }
  .slider-item a img{
    display: block;
    width: 100%;
  }
  .dots{
    position: absolute;
    width: 100%;
    height: 8px;
    bottom: 15px;
    text-align: center;
  }
  .dots span{
    display: inline-block;
    width: 8px;
    height: 8px;
    margin: 0 5px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 5px 1px rgba(0,0,0,.05);
  }
  .dots span.active{
    width: 20px;
  }
</style>
