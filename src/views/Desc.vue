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
          v-model="rating"
          starSize="25"
          starColor="#71B214"
          inactiveColor="#e6ebdf"
          controlBg="grey"
          showControl="false"
          disableClick="true"
          controlSize="0"
        />
        <div class="ml-5 inline-block">{{ rating }} Ratings</div>
        <button
          class="ml-10 bg-green sm:w-auto h-8 px-8 font-large text-white rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
        >
          Rate
        </button>
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
        class="ml-5 flex justify-center bg-fixed rounded-md border-2 border border-green-200"
        style="
          background-image: url(https://i.pinimg.com/736x/40/ca/6e/40ca6ebdab9b144c887e621e98efef53.jpg);
        "
      >
        <div class="h-100 font-black blur-none font-great pb-20 pt-10">
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

      <div id="task-comments" class="pt-4">
        <!--     comment-->
        <div
          class="bg-white rounded-lg p-3 flex flex-col justify-center items-center md:items-start shadow-lg mb-4"
          v-for="comnt in comment"
          :key="comnt"
        >
          <div class="flex flex-row justify-center mr-2">
            <img
              alt="avatar"
              width="48"
              height="48"
              class="rounded-full w-10 h-10 mr-4 shadow-lg mb-4"
              src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png"
            />
            <h3
              class="text-green-600 font-semibold text-lg text-center md:text-left"
            >
              {{ comnt.user_id }}
            </h3>
          </div>

          <p
            style="width: 90%"
            class="text-gray-600 text-lg text-center md:text-left"
          >
            {{ comnt.comment }}
          </p>
        </div>
        <!--  comment end--><!--     comment-->
      </div>
    </section>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { VueAgile } from "vue-agile";
import { defineComponent } from "vue";
import vue3starRatings from "vue3-star-ratings";

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
    comment: {
      query: gql`
        query MyQuery($recipeId: Int!) {
          comment(where: { recipe_id: { _eq: $recipeId } }) {
            comment
            user_id
            user {
              name
              id
            }
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
      comment: "",
      user_id: "",
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
            recipe_id: "45",
            user_id: "auth0|61e01be7b1392e00699a167b",
          },
          update: (store, { data: { insert_comment_one } }) => {
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
              store.readQuery(getCommentQuery)
            );
            console.log("existing Data => ", existingData);
            const newData = [];
            newData.push(insert_comment_one);
            for (let i = 0; i < 11; i++) {
              console.log(existingData.comment[0]);
              newData.push(existingData.comment[0]);
            }
            existingData.comment = newData;
            store.writeQuery({
              query: commentQuery,
              data: existingData,
            });
          },
        })
        .then((data) => {
          console.log(data);
          this.$router.push("#");
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
