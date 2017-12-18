<template>
  <div class="wrap">
    <div class="slider-content" v-if="recommends.length">
      <slider>
        <div v-for="item in recommends" :key="item.id">
          <a :href="item.linkUrl">
            <img :src="item.picUrl">
          </a>
        </div>
      </slider>
    </div>

    <h2>热门歌单</h2>
    <div class="hot-disclist">

    </div>
  </div>
</template>

<script>
import { recommendAPI, discListAPI, ERROK } from 'api/api'
import Slider from 'base/slider/slider'
export default {
  data() {
    return {
      recommends: []
    }
  },
  created() {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    _getRecommend() {
      this.axios.get(recommendAPI)
      .then((res) => {
        if (res.data.code === ERROK) {
          this.recommends = res.data.data.slider
        }
      })
      .catch((err) => {
        console.error(err)
      })
    },
    _getDiscList() {
      let url = discListAPI + '&sin=0&ein=15'
      this.axios.get(url)
      .then((res) => {
        console.log('res', res)
        if (res.data.code === ERROK) {
          this.disclists = res.data.list
        }
      })
    }
  },
  components: {
    Slider
  }
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
</style>

