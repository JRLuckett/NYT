<template>
  <div id="app">
    <h1>NYT-VUE</h1>
    <div>
      <Search />
      <Saved />
    </div>
  </div>
</template>

<script>
import Search from './components/Search'
import Saved from './components/Saved'
import store from './store/index.js'
export default {
  name: 'app',
  store,
  components: {
    'Search': Search,
    'Saved': Saved
  }
}
</script>

<style>
#app {

}
</style>
