<template>
  <div
    class="flex flex-wrap-reverse gap-y-4 justify-between py-6 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-24 z-0"
  >
    <div class="relative z-10 md:w-1/2 w-full">
      <img
        class="absolute top-0 right-0 md:-top-4 md:-right-8 w-24 h-auto"
        src="/assets/images/leaf.png"
        alt=""
      />
      <span class="flex items-center px-1 text-xl text-green">
        <span class="font-medium">Organic food recipes</span>
        <img class="w-auto h-8" src="/assets/images/vegetable.png" alt="" />
      </span>
      <h1
        class="pt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight whitespace-nowrap"
      >
        Healthy Lifestyle <br />
        is your only <br />
        <span class="whitespace-nowrap text-green"> unfair advantage </span>
      </h1>
      <p
        class="pt-8 sm:text-lg max-w-md font-normal text-gray-600 leading-relaxed"
      >
        Cook healthy foods with r<span class="text-green">E</span>cipe daily
        meal posted by world wide expert nutritionist, chef and even Your mom🤶.
      </p>
      <div class="flex pt-8 space-x-4 sm:space-x-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <router-link
            class="flex justify-center items-center w-full sm:w-auto h-13 px-8 bg-green font-medium text-white rounded-xl whitespace-nowrap hover:shadow-primary transition-shadow duration-300"
            :to="{ name: 'recipe'}"
          >
            🔍Explore recipes
          </router-link>
          <router-link
            class="flex justify-center items-center w-full sm:w-auto h-13 px-8 font-medium text-gray-900 border border-gray-900 rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
            :to="{ name: 'cook' }"
          >
            let's cook 👩‍🍳
          </router-link>
        </div>
      </div>
      <div class="flex pt-20">
        <img class="w-24" src="/assets/images/chef.png" alt="" />
        <div class="pt-5 pl-3">
          <div class="text-xl font-bold leading-relaxed">Chef of the month</div>
          <div class="inline-flex text-gray-600 leading-relaxed">
            People loved his 🍳
          </div>
          <div class="font-bold text-green leading-relaxed">
            80+ famous dishes
          </div>
        </div>
      </div>
    </div>

    <div class="relative md:w-1/2 w-full flex flex-col justify-between">
      <img
        class="w-96 lg:w-full drop-shadow-2xl self-center lg:self-end fadeInRotate"
        src="/assets/images/dish.png"
        alt=""
      />
      <div
        class="absolute right-0 lg:-right-6 top-0 lg:top-28 flex flex-col py-5 px-7 rounded-2xl shadow-xl bg-gradient-to-r from-green-300 to-transparent backdrop-blur-xl hover:bg-gradient-to-r from-green-200 to-transparent ... hover:-translate-y-8 hover:translate-x-8 hover:shadow-2xl transition-all duration-500"
      >
        <div class="flex -space-x-3">
          <div
            v-for="i in 3"
            class="w-13 h-13 rounded-full border-4 border-white object-cover overflow-hidden"
            :key="i"
          >
            <img :src="`/assets/images/avatar-${i}.jpeg`" alt="" />
          </div>
        </div>
        <div class="pt-3 font-bold">Happy Users</div>
        <div class="flex items-center text-gray-600 leading-relaxed">
          <span class="pl-1">⭐ 4.9 (+2.5k Ratings)</span>
        </div>
      </div>
      <div
        class="absolute left-0 bottom-0 md:bottom-32 lg:bottom-16 flex bg-gradient-to-r from-green-200 to-transparent rounded-2xl shadow-xl backdrop-blur-xl hover:bg-gradient-to-r from-green-200 to-transparent ... hover:-translate-y-6 hover:-translate-x-6 hover:shadow-2xl transition-all duration-300"
      >
        <img
          class="w-auto h-20 self-end"
          src="/assets/images/hero-dish.png"
          alt=""
        />
        <div class="pr-7 pl-2 py-5">
          <div class="font-bold">Best Nutritions</div>
          <div class="text-gray-600 leading-relaxed">
            Boost Your Nutrition🚀
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "Home",
};
</script>
