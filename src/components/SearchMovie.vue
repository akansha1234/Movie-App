<template>
    <div>
       <v-container>
    <v-layout wrap>
      <v-flex xs4
        v-for="(item, index) in movie"
        :key="index"
        mb-2>
        <v-card>
          <v-img
            :src="item.Poster"
            aspect-ratio="1"
          ></v-img>

          <v-card-title primary-title class="justify-center">
            <div>
              <h5>{{item.Title}}</h5>
              <h5>Year: {{item.Year}}</h5>
              <h5>Type: {{item.Type}}</h5>
              <h5>IMDB-id: {{item.imdbID}}</h5>
            </div>
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn 
              color="green"
              @click="singleMovie(item.imdbID)"
              >View</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
       </v-container>
    </div>
</template>
<script>
import axios from 'axios'
export default {
     props:['name'],
  data () {
    return {
     movie:[]
    }
  },
  mounted () {
  axios
    .get(`http://www.omdbapi.com/?s=${this.name}&apikey=e91f94b&page=1&type=movie&Content-Type=application/json`)
    .then(response => {
      this.movie= response.data.Search
      this.loading = false
      //console.log(this.movie)
    })
    .catch(error => {
      console.log(error)
    })
  },
//   watch: {
//     name () {
//       this.mounted;
//     }
// }
methods:{
      singleMovie(id){
          this.$router.push('/movie/' + id)
      }
  }
}
  </script>
  