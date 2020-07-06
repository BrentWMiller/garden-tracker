<template>
  <div>
    Profile

    <button class="button" @click="logout()">Logout</button>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  methods: {
    logout() {
      try {
        this.$store.dispatch("user/logout");
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style></style>
