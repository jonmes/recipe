<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <users />
</template>

<script>
import Users from "../components/Users.vue";
export default{
  components: {
    Users,
  }
}
</script>