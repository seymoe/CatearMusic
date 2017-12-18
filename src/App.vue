<template>
  <div id="app">
    <m-header></m-header>
    <toptab></toptab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Toptab from 'components/toptab/toptab'
export default {
  name: 'app',
  components: {
    MHeader,
    Toptab
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  line-height: 1;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
#app {
  height: 100%;
  text-align: center;
  color: #fff;
  background-color: rgb(73, 73, 73);
}
</style>
