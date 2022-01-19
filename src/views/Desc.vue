<template>
  <div
    class="flex flex-wrap justify-between px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-12 z-0"
  >
    <h1 class="w-full font-black font-great text-6xl mb-5">
      {{ recipe_by_pk.title }}
    </h1>
    <div class="w-full mb-4 flex-wrap-reverse">
      <div class="w-6/12 inline-block">
        <vue3starRatings
          class="stars"
          id="stars"
          v-model="recipe_by_pk.rating"
          starSize="25"
          starColor="#71B214"
          inactiveColor="#e6ebdf"
          controlBg="grey"
          showControl="false"
          disableClick="true"
          controlSize="0"
        />
        <div class="ml-5 inline-block">
          {{ recipe_by_pk.rating.toFixed(1) }} Ratings
        </div>
        <button
          class="ml-10 bg-green sm:w-auto h-8 px-8 font-large text-white rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
          @click="popupTriggers(ratingVal)"
        >
          Rate
        </button>
        <popup v-if="buttonTrigger" :togglePopup="popupTriggers" />
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
    <!-- =========== Prep time ========================== -->
    <div class="w-6/12 h-100">
      <div
        class="ml-5 flex justify-center bg-fixed bg-white rounded-md border-2 border border-green-200"
      >
        <div class="h-100 text-black blur-none font-bold pb-20 pt-10">
          <h2 class="text-3xl mb-5">
            Prep Time:&nbsp;&nbsp;&nbsp;{{ recipe_by_pk.prep_time }}
          </h2>
          <h2 class="text-3xl mb-5">
            Cook Time:&nbsp;&nbsp;&nbsp; {{ recipe_by_pk.cook_time }}
          </h2>

          <h2 class="text-3xl mb-5 inline-block">
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

    <div class="w-full mb-10">
      <h1 class="text-4xl font-black font-great mb-5">Ingrediants</h1>
      <h2
        class="text-2xl ml-10 pb-3"
        v-for="ing in recipe_by_pk.ingrediant"
        :key="ing"
      >
        {{ ing }}
      </h2>
    </div>
    <!-- ================== Steps ============== -->
    <div class="w-full">
      <h1 class="text-4xl font-black font-great mb-5">Steps</h1>
      <h2
        class="text-2xl text-justify ml-10 pb-5"
        v-for="(step, index) in recipe_by_pk.steps"
        :key="index"
      >
        <span class="font-black font-great">Step {{ index + 1 }}: </span><br />
        {{ step }}
      </h2>
    </div>
    <!-- =========== Comments ================== -->
    <section class="w-full rounded-b-lg mt-4">
      <form action="/" accept-charset="UTF-8" method="post">
        <input type="hidden" />
        <textarea
          class="w-full shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-2xl"
          v-model="comment"
          placeholder="Comment..."
          cols="6"
          rows="4"
          id="comment_content"
          spellcheck="false"
          required
        ></textarea>
        <button
          class="font-bold mb-10 py-2 px-4 w-full bg-green text-lg text-white shadow-md rounded-lg"
          @click="addComment"
          type="button"
        >
          Comment
        </button>
      </form>

      <comments :recipeId="recipe_id" />
    </section>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { VueAgile } from "vue-agile";
import { defineComponent } from "vue";
import vue3starRatings from "vue3-star-ratings";
import Comments from "../components/Comments.vue";
import Popup from "../components/PopupRating.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const commentQuery = gql`
  query MyQuery($recipeId: Int!) {
    comment(where: { recipe_id: { _eq: $recipeId } }) {
      comment
      user {
        name
        id
      }
    }
  }
`;

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
            user_id
            rating
            user {
              name
            }
          }
        }
      `,
      variables() {
        return { recipeId: this.recipe_id };
      },
    },
    // ============== Comment ====================
  },
  setup() {
    const store = useStore();
    const userData = computed(() => store.getters["main/user"]);
    return {
      userData,
    };
  },
  data() {
    return {
      recipe_id: "",
      recipe_by_pk: {},
      comment: "",
      user_id: "",
      buttonTrigger: false,
    };
  },
  created() {
    this.recipe_id = this.$props.id;
  },
  methods: {
    addComment() {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation ($comment: String!, $recipe_id: Int!, $user_id: String!) {
              insert_comment_one(
                object: {
                  comment: $comment
                  recipe_id: $recipe_id
                  user_id: $user_id
                }
              ) {
                recipe_id
                comment
                user_id
              }
            }
          `,
          variables: {
            comment: this.comment,
            recipe_id: this.recipe_id,
            user_id: this.userData.sub,
          },
          update: (cache, { data: { insert_comment_one } }) => {
            const getCommentQuery = {
              query: commentQuery,
              variables: {
                comment: "",
                user_id: "",
                recipe_id: "",
              },
            };
            console.log(getCommentQuery);
            const existingData = Object.assign(
              {},
              cache.readQuery(getCommentQuery)
            );
            console.log("existing Data => ", existingData);
            const newData = [];
            newData.push(insert_comment_one);
            for (let i = 0; i < existingData.length; i++) {
              console.log(existingData.comment[i]);
              newData.push(existingData.comment[0]);
            }
            existingData.comment = newData;
            cache.writeQuery({
              query: commentQuery,
              data: existingData,
            });
          },
        })
        .then((data) => {
          console.log(data.insert_comment_one.comment);
          this.$router.push("/recipe");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    popupTriggers() {
      this.buttonTrigger = !this.buttonTrigger;
      return this.buttonTrigger;
    },
  },
  components: {
    agile: VueAgile,
    vue3starRatings,
    Comments,
    Popup,
  },
});
</script>

<style scoped>
.vue3-star-ratings__wrapper[data-v-3d93c878] {
  padding: 0;
}
</style>
