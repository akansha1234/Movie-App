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
  <v-container v-else class="text-center">
    <h2>{{singleMovie.Title}}</h2>
    <v-img :src="singleMovie.Poster" width="400" height="400" class="image"></v-img>
    <h5>Released Date:{{singleMovie.Released}}</h5>
    <h5>Genre:{{singleMovie.Genre}}</h5>
    <h5>Director:{{singleMovie.Director}}</h5>
    <h5>IMDB Ratings:{{singleMovie.imdbRating}}</h5>
  </v-container>
</template>
  <script>
import axios from 'axios'
export default {
  props: ['id'],
  data () {
    return {
      singleMovie: '',
      loading:true
    }
  },
  mounted () {
    axios
      .get(`http://www.omdbapi.com/?apikey=e91f94b&i=${this.id}&Content-Type=application/json`)
      .then(response => {
        this.singleMovie = response.data
         this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.image{
  margin:20px auto;
}
</style>
