<template>
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
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "comments",
  props: ["recipeId"],
  data() {
    return { recipe_id: 0 };
  },
  created() {
    this.recipe_id = this.$props.recipeId;
  },
  apollo: {
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
};
</script>
