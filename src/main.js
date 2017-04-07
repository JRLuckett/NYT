import Vue from 'vue'
import App from './App.vue'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

// connect to GraphQL project
const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj187ja3m4qfb01528vvlqzpj'
})

const apolloClient = new ApolloClient({
  networkInterface
})

// Install the vue plugin
Vue.use(VueApollo, {
  apolloClient
})

// Start the app
new Vue({
  el: '#app',
  render: h => h(App)
})
