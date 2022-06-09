<template>
  <ul>
    <li v-for="film in array.film" :key="film.id">
      {{ film.original_title }}{{ film.title }}
      <country-flag :country="film.original_language" size="normal" />
      {{ film.original_language }}
      <country-flag :country="flag(film.original_language)" size="normal" />
      <img class="img" :src="getImg(film.poster_path)" alt="" />
    </li>
  </ul>
</template>

<script>
import array from "../particles/array";
export default {
  name: "OrgList",
  data() {
    return {
      array,
    };
  },
  methods: {
    flag(code) {
      switch (code) {
        case "en":
          return "gb";
        case "ja":
          return "jp";
        default:
          return code;
      }
    },
    getImg(path) {
      let prefix = "https://image.tmdb.org/t/p/w342";
      return prefix + path;
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 1px solid red;
}

img {
  width: 342px;
}
</style>