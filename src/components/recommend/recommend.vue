<template>
<div class="wrapper">
  <scroll class="wrap" :data="discList">
    <div>
      <div class="slider-content" v-if="recommends.length">
        <slider>
          <div v-for="item in recommends" :key="item.id">
            <a :href="item.linkUrl">
              <img :src="item.picUrl">
            </a>
          </div>
        </slider>
      </div>
      <div class="hot-disclist">
        <h2>热门歌单</h2>
        <div class="disclist">
          <div class="discitem" v-for="item in discList" :key="item.id">
            <div class="imgbox">
              <img :src="item.picUrl" :alt="item.songListDesc">
            </div>
            <div class="txtbox">
              <h3>{{ item.songListDesc }}</h3>
              <p>{{ item.songListAuthor }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </scroll>
  </div>
</template>

<script>
import { recommendAPI, discListAPI, ERROK } from 'api/api'
import Scroll from 'base/scroll/scroll'
import Slider from 'base/slider/slider'
export default {
  data() {
    return {
      recommends: [],
      discList: []
    }
  },
  created() {
    this._getRecommend()
    // this._getDiscList()
  },
  methods: {
    _getRecommend() {
      this.axios.get(recommendAPI)
        .then((res) => {
          if (res.data.code === ERROK) {
            this.recommends = res.data.data.slider
            this.discList = res.data.data.songList
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
    Slider,
    Scroll
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}

.hot-disclist {
  padding: 0 15px;
}

.hot-disclist h2 {
  margin: 20px 0 10px 0;
  text-align: left;
  font-size: 18px;
}

.discitem {
  padding: 10px 0;
  display: flex;
  border-bottom: 1px solid #666;
}

.discitem .imgbox {
  width: 80px;
  height: 80px;
  margin-right: 15px;
}

.discitem .imgbox img {
  display: block;
  width: 100%;
}

.discitem .txtbox {
  flex: 1;
}

.txtbox h3 {
  margin: 10px 0;
  color: #eaeaea;
  font-size: 16px;
  font-weight: normal;
}

.textbox p {
  color: #333;
  font-size: 14px;
}
</style>

