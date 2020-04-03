
<template>
  <v-rating
    v-model="rating"
    background-color="yellow accent-4"
    color="yellow accent-4"
    full-icon="mdi-star"
    half-icon="mdi-star-half"
    empty-icon="mdi-star-outline"
    dense
    half-increments
    readonly
    size="18"
  ></v-rating>
</template>

<script>
export default {
  props: {
    rating: Number,
    size: String,
    color: String
  }
};
</script>