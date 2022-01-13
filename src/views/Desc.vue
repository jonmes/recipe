<template>
  <div
    class="flex flex-wrap justify-between px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-12 z-0"
  >
    <h1 class="w-full font-black font-great text-6xl">
      {{ recipe_by_pk.title }}
    </h1>
    <div class="w-full mb-4 flex-wrap-reverse">
      <div class="w-6/12 inline-block">
        <vue3starRatings
          class="stars"
          id="stars"
          v-model="rating"
          starSize="25"
          starColor="#acff1c"
          inactiveColor="#e6ebdf"
          controlBg="grey"
          showControl="false"
          disableClick="true"
          controlSize="0"
        />
        <div class="w-6/12 ml-5 inline-block">{{ rating }} Ratings</div>
      </div>
    </div>
    <div class="w-6/12 h-100 mb-10">
      <agile
        class="w-full static p-2 bg-transparent rounded-xl transform transit-all duration-100"
      >
        <div
          class="w-full object-cover rounded-lg"
          v-for="img in recipe_by_pk.image"
          :key="img"
        >
          <img class="h-90 object-cover rounded-lg" :src="img" />
        </div>
      </agile>
    </div>
    <div class="w-6/12 h-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="32px"
        height="32px"
        role="img"
        viewBox="0 0 24 24"
        aria-hidden="true"
        class="absolute ml-20 mr-8 border-4 border-green-200 border-dashed rounded-lg"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            fill="#e7ab46"
            d="m 11.938,19.758 a 7.817,7.817 0 0 1 -7.815,-7.82 7.818,7.818 0 1 1 15.634,0 7.819,7.819 0 0 1 -7.818,7.82 M 11.939,2 c 5.486,0 9.937,4.447 9.937,9.938 0,5.488 -4.45,9.938 -9.937,9.938 C 6.454,21.876 2,17.426 2,11.938 2,6.448 6.454,2 11.939,2 Z m -0.554,5.624 a 0.554,0.554 0 0 0 1.108,0 V 5.64 a 0.554,0.554 0 0 0 -1.108,0 z m 0,10.688 a 0.555,0.555 0 0 0 1.108,0 v -1.984 a 0.551,0.551 0 0 0 -0.551,-0.55 0.553,0.553 0 0 0 -0.557,0.55 z m 7.181,-6.16 c 0.31,0 0.55,-0.247 0.55,-0.55 a 0.547,0.547 0 0 0 -0.55,-0.554 h -1.984 a 0.556,0.556 0 0 0 -0.557,0.555 c 0,0.302 0.251,0.55 0.557,0.55 h 1.984 z m -11.14,0 a 0.552,0.552 0 1 0 0,-1.104 H 5.442 a 0.555,0.555 0 0 0 -0.556,0.555 c 0,0.302 0.25,0.55 0.556,0.55 h 1.982 z m 0.88,-3.5 c 0.082,0.08 0.188,0.12 0.294,0.12 a 0.41,0.41 0 0 0 0.291,-0.12 0.418,0.418 0 0 0 0,-0.588 L 7.899,7.073 a 0.415,0.415 0 0 0 -0.586,0 0.421,0.421 0 0 0 0,0.587 z m 8.13,8.065 c 0.083,0.08 0.19,0.12 0.294,0.12 a 0.413,0.413 0 0 0 0.29,-0.706 l -0.992,-0.993 a 0.418,0.418 0 0 0 -0.585,0 0.42,0.42 0 0 0 0,0.585 z M 15.966,8.652 16.957,7.66 A 0.41471948,0.41471948 0 1 0 16.372,7.072 l -0.989,0.992 a 0.412,0.412 0 0 0 0,0.588 0.412,0.412 0 0 0 0.582,0 z m -8.131,8.066 0.99,-0.994 A 0.41295097,0.41295097 0 1 0 8.242,15.139 L 7.25,16.132 a 0.426,0.426 0 0 0 0,0.586 c 0.08,0.08 0.186,0.12 0.292,0.12 0.106,0 0.215,-0.04 0.293,-0.12 z m 3.628,-2.737 c 0.916,-1.107 4.562,-5.576 2.932,-4.566 -1.859,1.152 -4.516,3.113 -4.516,3.113 a 1.097,1.097 0 0 0 -0.414,0.855 1.085,1.085 0 0 0 1.788,0.83 l 0.004,0.01 c 0,0 0.02,-0.02 0.052,-0.057 0.058,-0.057 0.11,-0.117 0.154,-0.185 z"
          ></path>
        </g>
      </svg>
      <div
        class="ml-20 flex justify-center rounded-md border-4 border-dashed border-green-200"
      >
        <div class="h-100 font-black font-great pb-20 pt-10">
          <h2 class="text-3xl mb-5">
            Prep Time:&nbsp;&nbsp;&nbsp; {{ recipe_by_pk.prep_time }}
          </h2>
          <h2 class="text-3xl mb-5">
            Cook Time:&nbsp;&nbsp;&nbsp; {{ recipe_by_pk.cook_time }}
          </h2>
          <h2 class="text-3xl mb-5">
            Calories:&nbsp;&nbsp;&nbsp; {{ recipe_by_pk.calories }} KCal
          </h2>
          <h2 class="text-3xl mb-5">
            Servings:&nbsp;&nbsp;&nbsp; {{ recipe_by_pk.servings }} Man
          </h2>
          <h2 class="text-3xl mb-5">
            Category:&nbsp;&nbsp;&nbsp; {{ recipe_by_pk.category }}
          </h2>
        </div>
      </div>
    </div>
    <!--  ============== Ingrediants ======================== -->

    <div class="w-6/12">
      <h1 class="text-4xl font-black font-great mb-5">Ingrediants</h1>
      <h2
        class="text-2xl ml-10 pb-10"
        v-for="ing in recipe_by_pk.ingrediant"
        :key="ing"
      >
        {{ ing }}
      </h2>
    </div>
    <!-- ================== Steps ============== -->
    <div class="w-6/12">
      <h1 class="text-4xl font-black font-great mb-5">Steps</h1>
      <h2
        class="text-2xl ml-10 pb-10"
        v-for="(step, index) in recipe_by_pk.steps"
        :key="index"
      >
        <span class="font-black font-great">Step {{ index + 1 }}: </span><br />
        {{ step }}
      </h2>
    </div>
    <div>
      <h1>Comments</h1>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { VueAgile } from "vue-agile";
import { defineComponent } from "vue";
import vue3starRatings from "vue3-star-ratings";

export default defineComponent({
  name: "desc",
  props: ["id"],
  apollo: {
    recipe_by_pk: {
      query: gql`
        query ($recipeId: Int!) {
          recipe_by_pk(id: $recipeId) {
            title
            image
            prep_time
            cook_time
            calories
            servings
            category
            description
            steps
            ingrediant
            created_at
          }
        }
      `,
      variables() {
        return { recipeId: this.recipe_id };
      },
    },
  },
  data() {
    return {
      recipe_id: "",
      recipe_by_pk: {},
      rating: 4,
    };
  },
  created() {
    this.recipe_id = this.$props.id;
  },
  components: {
    agile: VueAgile,
    vue3starRatings,
  },
});
</script>

<style>
.vue3-star-ratings__wrapper[data-v-3d93c878] {
  padding: 0;
}
</style>
