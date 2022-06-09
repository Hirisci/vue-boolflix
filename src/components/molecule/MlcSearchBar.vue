<template>
  <form @submit.prevent="searchFilm">
    <AtmInput v-model="filter" />
    <AtmButton />
  </form>
</template>

<script>
import AtmButton from "../atom/AtmButton.vue";
import array from "../particles/array";
import axios from "axios";
import AtmInput from "../atom/AtmInput.vue";

export default {
  name: "MlcSearchBar",
  components: { AtmInput, AtmButton },
  data() {
    return {
      filter: "",
      array,
    };
  },
  methods: {
    searchFilm() {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "5f279572ee2385939f83e9a497cd6ac5",
            language: "it-IT",
            query: this.filter,
          },
        })
        .then(function (response) {
          array.film = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  gap: 1rem;
}
</style>