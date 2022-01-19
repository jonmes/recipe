<template>
  <div
    class="flex flex-wrap-reverse justify-between px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-12 z-0"
  >
    <form
      class="relative md:m-10 md:2-1/2 w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h1 class="mb-10 text-4xl">
        Create
        <span
          class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-100 relative inline-block"
        >
          <span class="relative text-green"> Your Own &nbsp;</span> </span
        >&nbsp;Recipe
      </h1>
      <!-- =========================== title =============================================== -->
      <hr mt-10 mb-10 />
      <div class="flex w-full items-center mt-5 mb-5">
        <label class="w-2/12">Title</label>
        <input
          type="text"
          v-model="title"
          class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="title"
        />
      </div>
      <!-- =================================    IMAGE UPLOAD     ========================= -->
      <hr mt-10 mb-10 />
      <div class="flex w-full items-center mt-5 mb-5">
        <label class="w-2/12">Upload Image</label>
        <div
          id="my-strictly-unique-vue-upload-multiple-image"
          style="text-align: center"
        >
          <vue-upload-multiple-image
            @upload-success="uploadImageSuccess"
            @before-remove="beforeRemove"
            @edit-image="editImage"
            @data-change="dataChange"
            :data-images="image"
          ></vue-upload-multiple-image>
        </div>
      </div>

      <!-- =========================== preparation time =============================================== -->
      <hr mt-10 mb-10 />
      <div class="flex w-full items-center mt-5 mb-5">
        <label class="w-2/12">Preparation Time</label>
        <input
          type="text"
          v-model="prep_time"
          class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="eg: 10 - 20 min"
        />
      </div>
      <!-- ============================= COOKING TIME   ===================================== -->
      <hr mt-10 mb-10 />
      <div class="flex w-full items-center mt-5 mb-5">
        <label class="w-2/12">Cooking Time</label>
        <input
          type="text"
          v-model="cook_time"
          class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="eg: 10 - 20 min"
        />
      </div>
      <!-- ========================== ingrediants ============================================ -->
      <hr mt-10 mb-10 />
      <div class="mt-5 mb-5">
        <div class="mb-5" v-for="(food, index) in ingrediant" :key="index">
          <div class="flex w-full">
            <label class="w-2/12">Ingredient</label>
            <input
              v-model="food.grediant"
              :name="`ingrediant[${index}][grediant]`"
              type="text"
              class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingredient Name"
            />

            <label class="pl-12 w-2/12">Amount</label>
            <input
              v-model="food.amount"
              :name="`ingrediant[${index}][title]`"
              type="text"
              class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />

            <button
              class="uppercase ml-4 p-3 flex items-center border border-red-300 hover:border-red-600 text-red-500 hover:text-white hover:bg-red-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12"
              @click="removeIngrediant(index)"
              type="button"
            >
              <svg
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
                style="transform: rotate(360deg)"
              >
                <path d="M12 12h2v12h-2z" fill="currentColor"></path>
                <path d="M18 12h2v12h-2z" fill="currentColor"></path>
                <path
                  d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
                  fill="currentColor"
                ></path>
                <path d="M12 2h8v2h-8z" fill="currentColor"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="mt-10 pb-10">
        <button
          @click="addIngrediant"
          type="button"
          class="bg-green hover:bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full"
        >
          + Add Ingrediant
        </button>
      </div>
      <!-- ========================== STEPS ============================================ -->
      <hr mt-10 mb-10 />
      <div class="mt-5 mb-5">
        <div class="mb-5" v-for="(foodStep, index) in steps" :key="index">
          <div class="flex w-full">
            <label class="w-2/12">Step {{ index + 1 }}</label>
            <textarea
              v-model="foodStep.step"
              :name="`steps[${index}][step]`"
              type="text"
              rows="5"
              cols="60"
              class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Description..."
            ></textarea>

            <button
              class="uppercase ml-4 p-3 flex items-center border border-red-300 hover:border-red-600 text-red-500 hover:text-white hover:bg-red-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12"
              @click="removeStep(index)"
              type="button"
            >
              <svg
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
                style="transform: rotate(360deg)"
              >
                <path d="M12 12h2v12h-2z" fill="currentColor"></path>
                <path d="M18 12h2v12h-2z" fill="currentColor"></path>
                <path
                  d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
                  fill="currentColor"
                ></path>
                <path d="M12 2h8v2h-8z" fill="currentColor"></path>
              </svg>
            </button>
          </div>
          <!-- <div class="form-group col-md-6">
            <label>Title</label>
            <input
              v-model="experience.title"
              :name="`ingrediant[${index}][title]`"
              type="text"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Title"
            />
          </div> -->
        </div>
      </div>

      <div class="mt-10 pb-10">
        <button
          @click="addStep"
          type="button"
          class="bg-green hover:bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full"
        >
          + Add Steps
        </button>
      </div>
      <!-- ============================= CALORIES   ===================================== -->
      <hr mt-10 mb-10 />
      <div class="flex w-full items-center mt-5 mb-5">
        <label class="w-2/12">Calories</label>
        <input
          type="number"
          v-model="calories"
          class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder=""
        />
      </div>
      <!-- ============================= SERVING   ===================================== -->
      <hr mt-10 mb-10 />
      <div class="flex w-full items-center mt-5 mb-5">
        <label class="w-2/12">Serving</label>
        <input
          type="number"
          v-model="servings"
          class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder=""
        />
      </div>
      <!-- ============================= CATEGORY   ===================================== -->
      <hr mt-10 mb-10 />
      <div class="flex w-full items-center mt-5 mb-5">
        <label class="w-2/12">Category</label>
        <input
          type="text"
          v-model="category"
          class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder=""
        />
        <input type="text" v-model="userData" class="hidden" />

        <!-- Dropdown menu -->
      </div>
      <!-- ============================= DESCRIPTION   ===================================== -->
      <hr mt-10 mb-10 />
      <div class="flex w-full items-center mt-5 mb-5">
        <label class="w-2/12">Description</label>
        <input
          type="text"
          v-model="description"
          class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder=""
        />
      </div>

      <div class="form-group">
        <button
          @click="addRecipe"
          type="button"
          class="bg-green hover:bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
// import Dropzone from "../components/Dropzone.vue";
import gql from "graphql-tag";
import { useStore } from "vuex";
import { computed } from "vue";

const recipeQuery = gql`
  query {
    recipe {
      id
      title
      image
      prep_time
      cook_time
      created_at
      calories
      servings
      category
      description
      user_id
    }
  }
`;

export default {
  setup() {
    const store = useStore();
    const userData = computed(() => store.getters["main/user"]);
    return {
      userData
    }
  },
  name: "cook",
  data: () => ({
    title: "",
    image: [
      {
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F616002.jpg&w=596&h=596&c=sc&poi=face&q=85",
      },
      {
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F631635.jpg&w=596&h=399&c=sc&poi=face&q=85",
      },
    ],
    prep_time: "",
    cook_time: "",
    calories: "",
    servings: "",
    category: "",
    description: "",
    user_id: "",

    ingrediant: [
      {
        grediant: "onion",
        amount: "2 kg",
      },
    ],
    steps: [
      {
        step: "",
      },
    ],
  }),

  // ================================ SetUp ============================

  // ========================== Method ===============================
  methods: {
    addRecipe() {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation (
              $calories: Int
              $category: String
              $cook_time: String
              $description: String
              $image: _text
              $ingrediant: _text
              $prep_time: String
              $servings: Int
              $steps: _text
              $title: String
              $user_id: String
            ) {
              insert_recipe_one(
                object: {
                  title: $title
                  calories: $calories
                  servings: $servings
                  image: $image
                  category: $category
                  cook_time: $cook_time
                  prep_time: $prep_time
                  description: $description
                  steps: $steps
                  ingrediant: $ingrediant
                  user_id: $user_id
                }
              ) {
                title
                calories
                servings
                image
                category
                cook_time
                prep_time
                description
                steps
                ingrediant
              }
            }
          `,
          variables: {
            title: this.title,
            calories: this.calories,
            servings: this.servings,
            image:
              "{" +
              this.image.map((im) => {
                return im.img;
              }) +
              "}",
            category: this.category,
            cook_time: this.cook_time,
            prep_time: this.prep_time,
            description: this.description,
            steps:
              "{" +
              this.steps.map((st) => {
                return st.step;
              }) +
              "}",
            ingrediant:
              "{" +
              this.ingrediant.map((ing) => {
                return ing.grediant + " " + ing.amount;
              }) +
              "}",
            user_id: this.userData.sub,
          },
          update: (store, { data: { insert_recipe_one } }) => {
            const getRecipeQuery = {
              query: recipeQuery,
            };
            console.log(getRecipeQuery);
            const existingData = Object.assign(
              {},
              store.readQuery(getRecipeQuery)
            );
            console.log("existing Data => ", existingData);
            const newData = [];
            newData.push(insert_recipe_one);
            for (let i = 0; i < existingData.length; i++) {
              console.log(existingData.recipe[i]);
              newData.push(existingData.recipe[i]);
            }
            existingData.recipe = newData;
            store.writeQuery({
              query: recipeQuery,
              data: existingData,
            });
          },
        })
        .then((data) => {
          console.log(data);
          this.$router.push("/recipe");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addIngrediant() {
      this.ingrediant.push({
        grediant: "",
        amount: "",
      });
      console.log(this.ingrediant[0]);
    },
    removeIngrediant(index) {
      this.ingrediant.splice(index, 1);
    },
    addStep() {
      this.steps.push({
        step: "",
        // title: "",
      });
    },
    removeStep(index) {
      this.steps.splice(index, 1);
    },
    submit() {
      const data = {
        ingrediant: this.ingrediant,
      };
      alert(JSON.stringify(data, null, 2));
    },
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://unpkg.com/vue-upload-multiple-image@1.1.6/dist/vue-upload-multiple-image.js"
    );
    document.head.appendChild(recaptchaScript);
  },
};
</script>

<style>
.work-experiences > div {
  margin: 20px 0;
  padding-bottom: 10px;
}
</style>
