<template>
  <nav class="fixed bottom-0 w-full px-6 py-4 bg-white">
    <ul class="flex justify-between">
      <li class="font-bold" v-for="link in links" :key="link.uri">
        <nuxt-link :to="link.uri">{{ link.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  data: function() {
    return {
      links: [
        {
          uri: "/",
          title: "Dashboard"
        },
        {
          uri: "/gardens",
          title: "Gardens"
        },
        {
          uri: "/plants",
          title: "Plants"
        },
        {
          uri: "/journal",
          title: "Journal"
        },
        {
          uri: "/profile",
          title: "Profile"
        }
      ]
    };
  }
};
</script>

<style></style>
