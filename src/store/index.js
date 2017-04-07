import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.store({
  state: {
    results: []
  },
  mutations: {
    newResult: (state, incomingResults) => {
      state.results = incomingResults
    }
  },
  actions: {
    queryNYT: ({state, commit}, queryParams) => {
      let searchURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=60ef363d30eb4fc79c853a9acb3cc5b6&q=${queryParams.topic}&begin_date=${queryParams.start}0101&end_date=${queryParams.end}0101`
      return axios.get(searchURL).then((response) => {
        console.log(response)
      })
    }
  }

})
