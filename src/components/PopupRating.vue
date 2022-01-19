<template>
  <div
    class="popup flex align-items justify-center fixed top-0 bottom-0 right-0 left-0 z-50"
  >
    <div class="w-full mb-4 justify-end flex-wrap-reverse fixed mt-40">
      <div class="w-3/12 inline-block"></div>
      <div class="w-6/12 inline-block bg-green-100 justify-end align-end">
        <vue3starRatings
          v-model="ratingVal"
          starSize="25"
          starColor="#71B214"
          inactiveColor="#e6ebdf"
          controlBg="grey"
          class="w-full inline-block"
        />
        <div class="inline-block pl-10 lg:pl-40 xl:ml-80 mb-10">
          {{ ratingVal }} Ratings

          <button
            class="bg-green sm:w-auto h-8 px-10 font-large text-white rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
            @click="togglePopup(ratingVal)"
          >
            Rate
          </button>
        </div>
      </div>
      <div class="w-3/12 inline-block"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import vue3starRatings from "vue3-star-ratings";

export default defineComponent({
  props: ["togglePopup"],
  data() {
    return {
      ratingVal: 3,
    };
  },
  components: {
    vue3starRatings,
  },
  methods:{
    
  }
});
</script>

<style scoped>
.popup {
  background: rgba(0, 0, 0, 0.6);
}
</style>
>
