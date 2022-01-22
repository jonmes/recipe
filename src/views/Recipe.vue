<template>
  <div
    class="flex flex-wrap justify-between px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-12 z-0"
  >
    <div
      class="flex flex-wrap justify-between px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-12 z-0"
    >
      <h1 class="w-full font-great font-black text-4xl text-center">
        Search Your Favorite Recipe
      </h1>
      <Filter class="w-full mb-20 items-end" />

      <!-- ============== CARD ================== -->

      <!-- ============================== Recipes List ============================= -->
      <div
        class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer"
        v-for="rec in recipe"
        :key="rec.id"
      >
        <div>
          <img :src="rec.image[0]" alt="pic" />
        </div>
        <div class="py-4 px-4 bg-white">
          <h3 class="text-2xl font-great font-black text-gray-600">
            {{ rec.title }}<br />by &quot;{{ rec.user_id }}
          </h3>
          <p class="mt-4 text-lg font-thin">{{ rec.description }}</p>
          <vue3starRatings
            class="stars"
            id="stars"
            v-model="rec.rating"
            starSize="25"
            starColor="#10B981"
            inactiveColor="#e6ebdf"
            controlBg="grey"
            showControl="false"
            disableClick="true"
            controlSize="0"
          />
          <span
            class="flex items-center justify-center mt-4 w-full bg-green hover:bg-green-500 py-1 rounded"
            ><svg
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4.4C3.439 4.4 0 9.232 0 10c0 .766 3.439 5.6 10 5.6 6.56 0 10-4.834 10-5.6 0-.768-3.44-5.6-10-5.6zm0 9.907c-2.455 0-4.445-1.928-4.445-4.307S7.545 5.691 10 5.691s4.444 1.93 4.444 4.309-1.989 4.307-4.444 4.307zM10 10c-.407-.447.663-2.154 0-2.154-1.228 0-2.223.965-2.223 2.154s.995 2.154 2.223 2.154c1.227 0 2.223-.965 2.223-2.154 0-.547-1.877.379-2.223 0z"
              /></svg
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <router-link
              role="button"
              :to="{
                name: 'desc',
                params: { id: rec.id },
                query: { id: rec.id },
              }"
              class="font-semibold text-gray-800"
              >View Recipe</router-link
            >
          </span>
        </div>
      </div>
      <!-- ============== 2 CARD ================== -->
      <!-- <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-32 gap-y-6"
    >
      <div
        class="w-60 static p-2 bg-white hover:bg-green-200 rounded-xl transform transit-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
        v-for="rec in recipe"
        :key="rec.id"
      >
        <img class="h-60 w-full object-cover rounded-lg" :src="rec.image[0]" />
        <div class="p-2">
          <h1 class="font-bold text-lg">{{ rec.title }}</h1>
          <p class="text-sm text-gray-600">{{ rec.description }}</p>
          <vue3starRatings
            class="stars"
            id="stars"
            v-model="rec.rating"
            starSize="25"
            starColor="#10B981"
            inactiveColor="#e6ebdf"
            controlBg="grey"
            showControl="false"
            disableClick="true"
            controlSize="0"
          />
        </div>
        <div class="m-2">
          <router-link
            role="button"
            :to="{
              name: 'desc',
              params: { id: rec.id },
              query: { id: rec.id },
            }"
            class="text-white bg-green-500 px-3 py-1 rounded-md hover:bg-green-700"
            >Show Recipe</router-link
          >
        </div>
      </div>
    </div> -->
    </div>
  </div>
</template>

<script>
import { recipe } from "../queri/queries";
import { defineComponent } from "vue";
import vue3starRatings from "vue3-star-ratings";
import Filter from "@/components/Filter.vue";

export default defineComponent({
  name: "Recipe",
  apollo: {
    recipe,
  },
  data() {
    return {
      recipe: [],
    };
  },
  components: {
    vue3starRatings,
    Filter,
  },
});
</script>
