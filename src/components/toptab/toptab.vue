<template>
  <div class="top-tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span>歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span>排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span>搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  .top-tab{
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: rgb(53, 53, 53);
  }
  .tab-item{
    width: 25%;
    text-align: center;
  }
  .router-link-active span{
    position: relative;
    color: lightseagreen;
  }
  .router-link-active span:after{
    display: block;
    position: absolute;
    bottom: -5px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background-color: lightseagreen;
  }
</style>


