<template>
  <div class="card">
    <img class="card_img" :src="getImg(film.poster_path)" alt="" />
    <MlcCardHover class="card_info" :film="film" />
  </div>
</template>

<script>
import MlcCardHover from "./MlcCardHover.vue";
export default {
  components: { MlcCardHover },
  name: "MlcCard",
  props: {
    film: Object,
  },
  methods: {
    getImg(path) {
      if (path === "null") {
        return " ";
      }
      let prefix = "https://image.tmdb.org/t/p/w342";
      return prefix + path;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  &_img {
    display: block;
    width: 100%;
    height: 32rem;
    overflow: hidden;
    object-fit: cover;
    object-position: top;
  }
  &_info {
    transition: margin 1s;
  }
  &:hover .card_info {
    margin-bottom: 0;
  }
}
</style>