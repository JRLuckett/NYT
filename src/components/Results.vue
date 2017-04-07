<template>
  <div v-for="result in results">
    <div>
      <h3>title
        <p>{{result.headline.main}}</p>
      </h3>
      <h4>date
        <p>{{result.pub_date}}</p>
      </h4>
      <h4>link
        <a v-bind:href="result.web_url">view</a>
      </h4>
      <button @click="save(result)" type="button" name="button">save</button>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { mapState } from 'vuex'
const createArticle = gql`
mutation ($article: String!, $date: String!, $link: String!) {
    createArticle(article: $article, date: $date, link: $link) {
        id
        article
        date
        link
    }
}
`
export default {
    computed: {
        results () {
            return this.$store.state.results
        }
    },
    methods: {
        save(res) {
            let article = res.headline.main
            let date = res.pub_date
            let link = res.web_url
            // Mutation
            this.$apollo.mutate({
                mutation: createArticle,
                variables: {
                    article,
                    date,
                    link
                },
                updateQueries: {
                    allArticles: (prev, { mutationResult }) => {
                        return {
                            // append at head of list because we sort the posts reverse chronological
                            allArticles: [mutationResult.data.createArticle, ...prev.allArticles],
                        }
                    },
                },
            }).then((data) => {
                // Result
                console.log(data)
            }).catch((error) => {
                // Error
                console.error(error)
            })
        },
    }
}
    </script>
<style>

</style>
