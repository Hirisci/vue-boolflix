<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "AtmBtnCarousel",
};
</script>

<style lang="scss" scoped>
div {
  position: absolute;
  bottom: 0;
  top: 0;
  width: 50px;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.8;
  &:hover > * {
    color: var(--clr-arrow-h);
    transform: scale(1.05);
  }
  > * {
    font-size: 3rem;
    color: var(--clr-arrow);
  }
}

.dx {
  right: 0;
}
.sx {
  left: 0;
}
</style>