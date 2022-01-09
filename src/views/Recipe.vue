<template>
  <div
    class="flex flex-wrap-reverse justify-between px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-12 z-0"
  >
    <div class="relative md:m-10 md:2-1/2 w-full">
      <div
        id="search-dish-call"
        class="font-medium text-2xl md:text-4xl text-center mb-6"
      >
        Search Your Favorite Dish
      </div>
      <div class="bg-transparent p-3 shadow-sm rounded-sm">
        <!--Search bar-->
        <div class="border rounded overflow-hidden flex mb-4">
          <input
            id="home-dish-search-bar"
            type="text"
            class="w-11/12 px-4 py-2 border-gray-300 focus:ring-blue-600 font-regular"
            placeholder="What are you looking for?"
          />
          <button
            class="flex w-1/12 items-center justify-center md:px-4 border-l"
          >
            <svg
              class="h-4 w-4 text-grey-dark"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex flex-wrap-reverse gap-y-24 justify-center py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-32 gap-y-6"
    >
      <!-- ============== CARD ================== -->
      <div
        class="w-60 static p-2 bg-white hover:bg-green-200 rounded-xl transform transit-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
        v-for="rec in recipe"
        :key="rec.id"
      >
        <img class="h-60 w-full object-cover rounded-lg" :src="rec.image[0]" />
        <div class="p-2">
          <h1 class="font-bold text-lg">{{ rec.title }}</h1>
          <p class="text-sm text-gray-600">{{ rec.description }}</p>
        </div>
        <div class="m-2">
          <a
            role="button"
            href="#"
            class="text-white bg-green-500 px-3 py-1 rounded-md hover:bg-green-700"
          >
            Show Recipe</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { recipe } from "../queri/queries";

export default {
  name: "Recipe",
  apollo: {
    recipe,
  },
  data() {
    return {
      recipe: [],
    };
  },
};
</script>
