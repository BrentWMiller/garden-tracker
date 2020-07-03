<template>
  <div>
    <ul v-if="seeds">
      <li v-for="seed in seeds" :key="seed.cid">
        <p>{{ seed.name }}</p>
        <p>{{ seed.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SeedList",
  props: {
    seedId: String
  },
  created() {
    this.load();
  },
  computed: {
    ...mapState("seeds", ["seeds"])
  },
  methods: {
    async load() {
      try {
        const uid = this.$store.getters["user/uid"];
        this.$store.dispatch("seeds/getSeeds", uid);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped></style>
