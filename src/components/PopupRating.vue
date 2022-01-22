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
            @click="addRating"
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
import gql from "graphql-tag";
import { useStore } from "vuex";
import { computed } from "vue";

const ratingQuery = gql`
  query MyQuery($recipeId: Int!) {
    rating(where: { recipe_id: { _eq: $recipeId } }) {
      rating_val
    }
  }
`;

export default defineComponent({
  setup() {
    const store = useStore();
    const userData = computed(() => store.getters["main/user"]);
    return {
      userData,
    };
  },
  props: ["recipeId"],
  data() {
    return {
      ratingVal: 0,
    };
  },
  created() {
    this.recipe_id = this.$props.recipeId;
  },
  components: {
    vue3starRatings,
  },
  methods: {
    addRating() {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation (
              $recipe_id: Int!
              $user_id: String!
              $rating_val: Float!
            ) {
              insert_rating_one(
                object: {
                  recipe_id: $recipe_id
                  user_id: $user_id
                  rating_val: $rating_val
                }
              ) {
                user_id
                recipe_id
                rating_val
              }
            }
          `,
          variables: {
            rating_val: this.ratingVal,
            recipe_id: this.recipe_id,
            user_id: this.userData.sub,
          },
          update: (cache, { data: { insert_rating_one } }) => {
            const getRatingQuery = {
              query: ratingQuery,
              variables: {
                recipe_id: "",
              },
            };
            console.log(getRatingQuery);
            const existingData = Object.assign(
              {},
              cache.readQuery(getRatingQuery)
            );
            console.log("existing Data => ", existingData);
            const newData = [];
            newData.push(insert_rating_one);
            for (let i = 0; i < existingData.length; i++) {
              console.log(existingData.rating_val[i]);
              newData.push(existingData.rating_val[i]);
            }
            existingData.rating_val = newData;
            cache.writeQuery({
              query: ratingQuery,
              data: existingData,
            });
          },
        })
        .then((data) => {
          console.log(data.insert_rating_one.rating_val);
          this.$router.push("/recipe");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>

<style scoped>
.popup {
  background: rgba(0, 0, 0, 0.6);
}
</style>
>
