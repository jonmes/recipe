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
          class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="title"
        />
      </div>
      <!-- =================================    IMAGE UPLOAD     ========================= -->
      <hr mt-10 mb-10 />
      <div class="flex w-full items-center mt-5 mb-5">
        <label class="w-2/12">Upload Image</label>
        <Dropzone class="w-3/12" />
      </div>

      <!-- =========================== preparation time =============================================== -->
      <hr mt-10 mb-10 />
      <div class="flex w-full items-center mt-5 mb-5">
        <label class="w-2/12">Preparation Time</label>
        <input
          type="text"
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
          class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="eg: 10 - 20 min"
        />
      </div>
      <!-- ========================== ingrediants ============================================ -->
      <hr mt-10 mb-10 />
      <div class="mt-5 mb-5">
        <div class="mb-5" v-for="(grediant, index) in ingrediant" :key="index">
          <div class="flex w-full">
            <label class="w-2/12">Ingredient</label>
            <input
              v-model="ingrediant.grediant"
              :name="`ingrediant[${index}][grediant]`"
              type="text"
              class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingredient Name"
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
        <div class="mb-5" v-for="(step, index) in steps" :key="index">
          <div class="flex w-full">
            <label class="w-2/12">Step {{ index + 1 }}</label>
            <textarea
              v-model="steps.step"
              :name="`steps[${index}][step]`"
              type="text"
              rows = "5" cols = "60"
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
          type="text"
          class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder=""
        />
      </div>
      <!-- ============================= SERVING   ===================================== -->
      <hr mt-10 mb-10 />
      <div class="flex w-full items-center mt-5 mb-5">
        <label class="w-2/12">Serving</label>
        <input
          type="text"
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
          class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder=""
        />
      </div>
      <!-- ============================= DESCRIPTION   ===================================== -->
      <hr mt-10 mb-10 />
      <div class="flex w-full items-center mt-5 mb-5">
        <label class="w-2/12">Description</label>
        <input
          type="text"
          class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder=""
        />
      </div>

      <div class="form-group">
        <button
          @click="submit"
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
import Dropzone from "../components/Dropzone.vue";

export default {
  name: "cook",

  data: () => ({
    ingrediant: [
      {
        grediant: "",
        // title: "Engineer",
      },
    ],
    steps: [
      {
        step: "",
      },
    ],
  }),
  methods: {
    addIngrediant() {
      this.ingrediant.push({
        grediant: "",
        // title: "",
      });
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
  components: {
    Dropzone,
  },
};
</script>

<style>
.work-experiences > div {
  margin: 20px 0;
  padding-bottom: 10px;
}
</style>
