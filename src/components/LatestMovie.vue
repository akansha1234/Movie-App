<template>
<v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="primary">
      </v-progress-circular>
    </div>
  </v-container>
    <v-container v-else>
        <h1>LATEST MOVIES</h1>
      <v-row>
        <v-col cols="12" lg="4" sm="6" v-for="result in wholeResponse" :key="result.title">
        <v-card>
          <v-img :src="result.Poster"  height="250" aspect-ratio="1"></v-img>
          <v-card-title primary-title class="justify-center">
            <div class="content">
              <h5>{{result.Title}}</h5>
              <h5>Year: {{result.Year}}</h5>
              <h5>Type: {{result.Type}}</h5>
              <h5>IMDB-id: {{result.imdbID}}</h5>
            </div>
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn 
              color="green"
              @click="singleMovie(result.imdbID)"
              >View</v-btn>
          </v-card-actions>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      wholeResponse: [],
      loading: true
    }
  },
  mounted () {
  axios
    .get('http://www.omdbapi.com/?s=man&apikey=e91f94b&page=1&type=movie&Content-Type=application/json')
    .then(response => {
      this.wholeResponse = response.data.Search
      this.loading = false
    })
    .catch(error => {
      console.log(error)
    })
    //console.log(this.wholeResponse)
  },
  methods:{
      singleMovie(id){
          this.$router.push('/movie/' + id)
      }
  }
}
</script>

<style scoped>
.content{
    text-align: center !important;
}
</style>
