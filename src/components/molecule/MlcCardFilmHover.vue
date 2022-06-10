<template>
  <div class="card-info">
    <h3>{{ film.title }}</h3>
    <p>{{ film.overview }}</p>
    <div class="card-info_detail">
      <div>
        <span v-for="n in 5" :key="n">
          <font-awesome-icon
            :class="{ star: getVote(film.vote_average) > n }"
            icon="fa-solid fa-star"
          />
        </span>
      </div>
      <country-flag
        class="flag"
        :country="flag(film.original_language)"
        size="normal"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MlcCardFilmHover",
  props: {
    film: Object,
  },
  methods: {
    getVote(vote) {
      return Math.ceil(vote / 2);
    },
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
  },
};
</script>

<style lang="scss" scoped>
.card-info {
  h3 {
    font-weight: 600;
    text-align: center;
  }
  p {
    line-height: 1.05rem;
    font-weight: 0.8rem;
    height: 80%;
    overflow: auto;
    letter-spacing: 0.01rem;
    padding: 0 var(--padding-xs);
  }
  position: absolute;
  margin-bottom: -16rem;
  height: 50%;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: var(--clr-card-info);
  padding: var(--padding-md);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &_detail {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
  }
}

.star {
  color: goldenrod;
}

.flag {
  margin: 0 !important;
}
</style>