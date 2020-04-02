
<template>
  <v-rating length="5" half-increments dense readonly :rating="rating" :size="size" :color="color" ></v-rating>
</template>

<script>
export default {
  props: {
    rating: String,
    size: String,
    color: String
  }
};
</script>