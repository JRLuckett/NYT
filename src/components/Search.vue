<template>
  <div class="">
    <input type="text" name="Article" v-model="article">
    <input type="text" name="Start" v-model="start">
    <input type="text" name="End" v-model="end">
    <button @click="searchFor" type="submit" name="button">Search</button>
    <Results />
  </div>
</template>

<script>
import Results from './Results'

export default {
  components: {
    Result : Result
  },
  data: () => ({
    article: '',
    start: '',
    end: ''
  }),
  method: {
    searchFor(){
      let queryParams = {
        article: this.article,
        start: this.start,
        end: this.end,
      }
        this.$store.dispatch('searchURL', queryParams)
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
