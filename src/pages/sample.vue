<template>
  <!-- slider component -->
  <div>
    <slidercomponent />
  </div>
  <!-- use boostrap class for  get space -->
  <div class="mt-20"></div>
  <div class="mt-20"></div>
  <!-- card component -->
  <div>
    <cardcomponent />
  </div>

  <div class="mt-20"></div>
  <div class="mt-20"></div>

   <!-- formcomponent -->
<div>
<formcomponent />
</div>
<div class="mt-10"></div>
<div class="mt-10"></div>
</template>

<script>
import slidercomponent from "@/components/slidercomponent.vue";
import cardcomponent from "@/components/cardcomponents.vue";
import formcomponent from "@/components/formcomponent.vue";

export default {
  components: {
    slidercomponent,
    cardcomponent,
    formcomponent,
  },
};
</script>
<style></style>
